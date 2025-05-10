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
        # TODO: Implement Google Places API integration
        return "I'll help you find food places. This feature is coming soon!"
    
    def _check_deadlines(self, query: str) -> str:
        """Check deadlines and schedules."""
        # TODO: Implement calendar integration
        return "I'll check your deadlines. This feature is coming soon!"
    
    def _get_campus_info(self, query: str) -> str:
        """Get campus information."""
        # TODO: Implement campus database integration
        return "I'll get that campus information for you. This feature is coming soon!"
    
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
        

        