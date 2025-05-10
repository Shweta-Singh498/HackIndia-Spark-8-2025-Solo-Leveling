from typing import List, Dict, Any
from langchain.agents import AgentExecutor, create_openai_functions_agent
from langchain.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain.tools import Tool
from langchain.chat_models import ChatOpenAI
from langchain.memory import ConversationBufferMemory
from langchain.schema import SystemMessage
import os
from dotenv import load_dotenv

load_dotenv()

class CampusCopilot:
    def __init__(self):
        self.llm = ChatOpenAI(
            model="gpt-3.5-turbo",
            temperature=0.7,
            api_key=os.getenv("OPENAI_API_KEY")
        )
        
        # Enhanced memory with context
        self.memory = ConversationBufferMemory(
            memory_key="chat_history",
            return_messages=True,
            output_key="output"
        )
        
        # Add system context
        self.system_context = {
            "user_name": None,
            "course": None,
            "semester": None,
            "preferences": {}
        }
        
        self.tools = self._initialize_tools()
        self.agent = self._create_agent()
        
    def set_user_context(self, name: str = None, course: str = None, semester: str = None, preferences: dict = None):
        """Set user-specific context."""
        if name:
            self.system_context["user_name"] = name
        if course:
            self.system_context["course"] = course
        if semester:
            self.system_context["semester"] = semester
        if preferences:
            self.system_context["preferences"].update(preferences)
    
    def _get_system_prompt(self) -> str:
        """Generate system prompt with context."""
        context = []
        if self.system_context["user_name"]:
            context.append(f"User's name is {self.system_context['user_name']}")
        if self.system_context["course"]:
            context.append(f"User is studying {self.system_context['course']}")
        if self.system_context["semester"]:
            context.append(f"User is in {self.system_context['semester']}")
        
        context_str = "\n".join(context) if context else ""
        
        return f"""You are Campus Copilot, an AI assistant for college students.
        {context_str}
        You help with academic queries, find food places, manage deadlines, and assist with documents.
        Always be helpful, friendly, and professional.
        Remember user preferences and past interactions to provide personalized responses."""
    
    def _initialize_tools(self) -> List[Tool]:
        """Initialize the tools available to the agent."""
        return [
            Tool(
                name="find_food",
                func=self._find_food,
                description="Find food places near campus based on preferences"
            ),
            Tool(
                name="check_deadlines",
                func=self._check_deadlines,
                description="Check upcoming assignment deadlines and exam schedules"
            ),
            Tool(
                name="get_campus_info",
                func=self._get_campus_info,
                description="Get information about campus facilities and services"
            ),
            Tool(
                name="document_assistance",
                func=self._document_assistance,
                description="Help with KYC, tax, and visa forms"
            )
        ]
    
    def _create_agent(self) -> AgentExecutor:
        """Create the agent with tools and memory."""
        prompt = ChatPromptTemplate.from_messages([
            ("system", self._get_system_prompt()),
            MessagesPlaceholder(variable_name="chat_history"),
            ("human", "{input}"),
            MessagesPlaceholder(variable_name="agent_scratchpad"),
        ])
        
        agent = create_openai_functions_agent(
            llm=self.llm,
            tools=self.tools,
            prompt=prompt
        )
        
        return AgentExecutor(
            agent=agent,
            tools=self.tools,
            memory=self.memory,
            verbose=True
        )
    
    def _find_food(self, query: str) -> str:
        """Find food places near campus."""
        # Hardcoded food places database
        food_places = {
            "LIET Noida": {
                "Cafeteria": [
                    "LIET College Canteen - Affordable meals, snacks, and beverages",
                    "Student Mess - Daily thali and regular meals"
                ],
                "Nearby Restaurants": [
                    "Food Court at GIP Mall (2 km) - Multiple food options",
                    "Haldiram's (1.5 km) - North Indian, snacks",
                    "Pizza Hut (2 km) - Fast food, pizza",
                    "Subway (2 km) - Sandwiches, healthy options",
                    "Bikanerwala (1.5 km) - Indian snacks, sweets"
                ],
                "Budget Options": [
                    "Local Dhabas (500m) - Authentic North Indian food",
                    "Street Food Stalls - Chaat, momos, rolls",
                    "College Canteen - Economical meals"
                ]
            },
            "Lloyd Institute Noida": {
                "Cafeteria": [
                    "Lloyd Institute Canteen - Regular meals and snacks",
                    "Student Mess - Daily thali and breakfast"
                ],
                "Nearby Restaurants": [
                    "Dominos (1 km) - Pizza delivery",
                    "McDonald's (1.5 km) - Fast food",
                    "Haldiram's (2 km) - North Indian, snacks",
                    "Bikanerwala (2 km) - Indian snacks, sweets"
                ],
                "Budget Options": [
                    "Local Food Stalls - Street food, chaat",
                    "College Canteen - Affordable meals",
                    "Nearby Dhabas - North Indian cuisine"
                ]
            }
        }
        
        # Process the query to determine which campus
        query = query.lower()
        if "liet" in query:
            campus = "LIET Noida"
        elif "lloyd" in query:
            campus = "Lloyd Institute Noida"
        else:
            # Default to both campuses if not specified
            response = "Here are food options near both campuses:\n\n"
            for campus_name, categories in food_places.items():
                response += f"=== {campus_name} ===\n"
                for category, places in categories.items():
                    response += f"\n{category}:\n"
                    for place in places:
                        response += f"- {place}\n"
                response += "\n"
            return response
        
        # Generate response for specific campus
        response = f"Here are food options near {campus}:\n\n"
        for category, places in food_places[campus].items():
            response += f"{category}:\n"
            for place in places:
                response += f"- {place}\n"
            response += "\n"
        
        return response
    
    def _check_deadlines(self, query: str) -> str:
        """Check deadlines and schedules."""
        # Hardcoded academic calendar and deadlines
        academic_calendar = {
            "Semester Schedule": {
                "Mid-Semester Exams": "October 15-20, 2024",
                "End-Semester Exams": "December 10-20, 2024",
                "Semester Break": "December 21, 2024 - January 5, 2025"
            },
            "Assignment Deadlines": {
                "Project Submissions": {
                    "Database Project": "November 10, 2024",
                    "Web Development": "November 15, 2024",
                    "AI/ML Project": "November 20, 2024"
                },
                "Regular Assignments": {
                    "Data Structures": "Weekly submissions",
                    "Operating Systems": "Bi-weekly submissions",
                    "Computer Networks": "Weekly submissions"
                }
            },
            "Important Dates": {
                "Registration Deadline": "September 30, 2024",
                "Scholarship Applications": "October 5, 2024",
                "Placement Drive": "November 1-5, 2024",
                "Hackathon": "November 15-16, 2024"
            },
            "Holidays": {
                "Diwali Break": "November 1-3, 2024",
                "Christmas": "December 25, 2024",
                "New Year": "January 1, 2025"
            }
        }
        
        # Process the query to determine what information to return
        query = query.lower()
        response = "Here are the relevant deadlines and schedules:\n\n"
        
        if "exam" in query or "test" in query:
            response += "=== Exam Schedule ===\n"
            for exam, date in academic_calendar["Semester Schedule"].items():
                if "exam" in exam.lower():
                    response += f"- {exam}: {date}\n"
            response += "\n"
            
        if "project" in query or "assignment" in query:
            response += "=== Assignment Deadlines ===\n"
            for category, items in academic_calendar["Assignment Deadlines"].items():
                response += f"\n{category}:\n"
                for item, deadline in items.items():
                    response += f"- {item}: {deadline}\n"
            response += "\n"
            
        if "holiday" in query or "break" in query:
            response += "=== Holidays and Breaks ===\n"
            for holiday, date in academic_calendar["Holidays"].items():
                response += f"- {holiday}: {date}\n"
            response += "\n"
            
        if "important" in query or "date" in query:
            response += "=== Important Dates ===\n"
            for event, date in academic_calendar["Important Dates"].items():
                response += f"- {event}: {date}\n"
            response += "\n"
            
        # If no specific category was requested, show all deadlines
        if not any(keyword in query for keyword in ["exam", "test", "project", "assignment", "holiday", "break", "important", "date"]):
            for category, items in academic_calendar.items():
                response += f"=== {category} ===\n"
                if isinstance(items, dict):
                    for item, date in items.items():
                        if isinstance(date, dict):
                            response += f"\n{item}:\n"
                            for subitem, subdate in date.items():
                                response += f"- {subitem}: {subdate}\n"
                        else:
                            response += f"- {item}: {date}\n"
                response += "\n"
        
        # Add a reminder about upcoming deadlines
        response += "\nReminder: Please check your college portal regularly for any updates or changes to these schedules."
        
        return response
    
    def _get_campus_info(self, query: str) -> str:
        """Get campus information."""
        # Hardcoded campus information database
        campus_info = {
            "General Information": {
                "Name": "Pranveer Singh Institute of Technology (PSIT)",
                "Location": "Bhatni, Kanpur-Dehat, Uttar Pradesh",
                "Established": "2004",
                "Campus Size": "100+ acres",
                "Accreditation": "NAAC A++ Accredited, NBA Accredited Programs"
            },
            "Academic Departments": {
                "Engineering": [
                    "Computer Science & Engineering",
                    "Information Technology",
                    "Electronics & Communication",
                    "Electrical Engineering",
                    "Mechanical Engineering",
                    "Civil Engineering"
                ],
                "Management": [
                    "MBA",
                    "BBA"
                ],
                "Pharmacy": [
                    "B.Pharma",
                    "M.Pharma"
                ]
            },
            "Campus Facilities": {
                "Academic": [
                    "Smart Classrooms with Projectors",
                    "Advanced Computer Labs",
                    "Research Centers",
                    "Central Library with Digital Resources",
                    "Conference Halls"
                ],
                "Sports": [
                    "Cricket Ground",
                    "Football Field",
                    "Basketball Court",
                    "Tennis Court",
                    "Indoor Sports Complex",
                    "Swimming Pool"
                ],
                "Technical": [
                    "Robotics Lab",
                    "IoT Lab",
                    "AI/ML Lab",
                    "Cloud Computing Lab",
                    "Networking Lab"
                ],
                "Other Facilities": [
                    "Auditorium",
                    "Medical Center",
                    "Bank & ATM",
                    "Cafeteria",
                    "Hostel Accommodation",
                    "Transportation Services"
                ]
            },
            "Placement & Training": {
                "Training": [
                    "Industry-Oriented Training Programs",
                    "Soft Skills Development",
                    "Technical Workshops",
                    "Internship Opportunities"
                ],
                "Placement Support": [
                    "Dedicated Placement Cell",
                    "Career Counseling",
                    "Resume Building Workshops",
                    "Mock Interviews"
                ]
            },
            "Student Life": {
                "Clubs": [
                    "Technical Clubs",
                    "Cultural Clubs",
                    "Sports Clubs",
                    "Literary Society",
                    "Entrepreneurship Cell"
                ],
                "Events": [
                    "Annual Technical Fest",
                    "Cultural Fest",
                    "Sports Meet",
                    "Hackathons",
                    "Workshops and Seminars"
                ]
            }
        }
        
        # Process the query to determine what information to return
        query = query.lower()
        response = "Here's the information about PSIT Kanpur:\n\n"
        
        if "department" in query or "course" in query or "program" in query:
            response += "=== Academic Departments ===\n"
            for dept_type, departments in campus_info["Academic Departments"].items():
                response += f"\n{dept_type}:\n"
                for dept in departments:
                    response += f"- {dept}\n"
            response += "\n"
            
        if "facility" in query or "infrastructure" in query or "lab" in query:
            response += "=== Campus Facilities ===\n"
            for category, facilities in campus_info["Campus Facilities"].items():
                response += f"\n{category}:\n"
                for facility in facilities:
                    response += f"- {facility}\n"
            response += "\n"
            
        if "placement" in query or "training" in query or "career" in query:
            response += "=== Placement & Training ===\n"
            for category, items in campus_info["Placement & Training"].items():
                response += f"\n{category}:\n"
                for item in items:
                    response += f"- {item}\n"
            response += "\n"
            
        if "student" in query or "club" in query or "event" in query:
            response += "=== Student Life ===\n"
            for category, items in campus_info["Student Life"].items():
                response += f"\n{category}:\n"
                for item in items:
                    response += f"- {item}\n"
            response += "\n"
            
        # If no specific category was requested, show all information
        if not any(keyword in query for keyword in ["department", "course", "program", "facility", "infrastructure", "lab", "placement", "training", "career", "student", "club", "event"]):
            for category, items in campus_info.items():
                response += f"=== {category} ===\n"
                if isinstance(items, dict):
                    for subcategory, subitems in items.items():
                        response += f"\n{subcategory}:\n"
                        if isinstance(subitems, list):
                            for item in subitems:
                                response += f"- {item}\n"
                        else:
                            response += f"- {subitems}\n"
                response += "\n"
        
        # Add contact information
        response += "\nFor more information, visit the official website or contact the admission office."
        
        return response
    
    def _document_assistance(self, query: str) -> str:
        """Help with document-related queries."""
        # TODO: Implement document processing
        return "I'll help you with your documents. This feature is coming soon!"
    
    def chat(self, message: str) -> str:
        """Process a user message and return a response."""
        try:
            # Update system prompt with latest context
            self.agent = self._create_agent()
            
            response = self.agent.invoke({"input": message})
            return response["output"]
        except Exception as e:
            return f"I encountered an error: {str(e)}" 
        

        