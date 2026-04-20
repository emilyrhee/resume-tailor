from dotenv import load_dotenv
from langchain_cohere import CohereEmbeddings


load_dotenv()

embeddings = CohereEmbeddings(model="embed-english-v3.0")