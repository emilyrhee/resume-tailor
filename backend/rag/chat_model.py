from dotenv import load_dotenv
from langchain_cohere import ChatCohere


load_dotenv()


def generate_response(prompt: str) -> str:
    chat_model = ChatCohere()
    response = chat_model.invoke(prompt)
    return response.content