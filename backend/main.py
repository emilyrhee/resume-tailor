import os
from rag.document_loader import load_documents
from rag.embeddings_model import embeddings
from rag.text_splitter import text_splitter
from rag.vector_database import VectorDatabase
from rag.prompt_template import build_prompt
from rag.chat_model import generate_response


_vector_db_instance = None

def get_vector_db():
    global _vector_db_instance
    if _vector_db_instance is None:
        base_dir = os.path.dirname(os.path.abspath(__file__))
        data_dir = os.path.join(base_dir, "data")
        documents = load_documents(data_dir)

        split_documents = text_splitter.split_documents(documents)

        _vector_db_instance = VectorDatabase(
            [document.page_content for document in split_documents],
            embeddings
        )
    return _vector_db_instance

def rag_pipeline(query: str, resume: str, k: int = 5) -> dict[str, object]:
    """
    Execute a Retrieval-Augmented Generation (RAG) pipeline to generate tailored responses.
    This function retrieves relevant document chunks based on a query, combines them with
    resume context, and generates a response using a language model.
    Args:
        query (str): The user's question or query to process. Typically what
        kind of role the candidate is applying for.
        resume (str): The resume content to include in the context for generation.
        k (int, optional): The number of top relevant chunks to retrieve. Defaults to 5.
    Returns:
        dict[str, object]: A dictionary containing:
            - "query" (str): The original query.
            - "k" (int): The number of chunks retrieved.
            - "retrieved" (list): List of retrieved documents with their similarity scores,
              each containing "score" (float) and "content" (str).
            - "generated_prompt" (str): The constructed prompt sent to the model.
            - "response" (str): The generated response from the language model.
    """
    vector_db = get_vector_db()
    top_results = vector_db.get_chunks_with_scores(query, k=k)

    context = "\n\n".join([result[0].page_content for result in top_results])
    
    generated_prompt = build_prompt(
        resume=resume,
        query=query,
        context=context
    )
    response = generate_response(generated_prompt)

    return {
        "query": query,
        "k": k,
        "retrieved": [
            {
                "score": score,
                "content": document.page_content
            }
            for document, score in top_results
        ],
        "generated_prompt": generated_prompt,
        "response": response
    }


def main():
    result = rag_pipeline(
        query="What has this candidate done regarding Next.js?",
        resume="Experienced software engineer with a strong background in web development, specializing in React and Next.js. Developed multiple projects using Next.js, including a personal portfolio website and a company blog platform. Proficient in server-side rendering, static site generation, and API routes with Next.js.",
        k=5,
    )
    print("Generated Prompt:" + str(result["generated_prompt"]))
    print("\nModel Response:\n" + str(result["response"]))


if __name__ == "__main__":
    main()