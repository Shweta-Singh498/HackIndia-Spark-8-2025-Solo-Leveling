from agent.base import CampusCopilot

def main():
    # Initialize the agent
    agent = CampusCopilot()
    
    # Set user context
    agent.set_user_context(
        name="Alex",
        course="Computer Science",
        semester="3rd Year",
        preferences={"favorite_food": "dosa", "study_spot": "library"}
    )
    
    # Test queries with context
    test_queries = [
        "When's the next internal exam?",
        "Find me the best dosa place near hostel",
        "Remind me to submit my assignment before 10 PM",
        "Help me with my KYC form",
        "What's my favorite study spot?"  # This will use the context
    ]
    
    # Process each query
    for query in test_queries:
        print(f"\nUser: {query}")
        response = agent.chat(query)
        print(f"Agent: {response}")

if __name__ == "__main__":
    main() 