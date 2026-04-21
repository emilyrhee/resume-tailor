from langchain_core.vectorstores import InMemoryVectorStore


class VectorDatabase:
    def __init__(self, texts: list[str], embeddings_model, k: int = 5):
        self.vector_store = InMemoryVectorStore.from_texts(
            texts=texts, embedding=embeddings_model
        )
        self.retriever = self.vector_store.as_retriever(search_kwargs={"k": k})

    def get_chunks(self, query: str) -> list[str]:
        return self.retriever.invoke(query)

    def get_chunks_with_scores(self, query: str, k: int = 5):
        return self.vector_store.similarity_search_with_score(query, k=k)