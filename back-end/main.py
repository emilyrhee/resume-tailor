from rag.document_loader import load_documents
from rag.embeddings_model import embeddings
from rag.text_splitter import text_splitter
from rag.vector_database import VectorDatabase
from rag.prompt_template import build_prompt
from rag.chat_model import generate_response


def rag_pipeline(query: str, resume: str, k: int = 5) -> dict[str, object]:
    documents = load_documents("back-end/data")

    split_documents = text_splitter.split_documents(documents)

    vector_db = VectorDatabase(
        [document.page_content for document in split_documents],
        embeddings,
        k=k
    )
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