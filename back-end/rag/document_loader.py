from langchain_core.documents import Document
from langchain_community.document_loaders import TextLoader
from pathlib import Path


def load_documents(directory: str) -> list[Document]:
    """Load documents from a specified directory.
    These documents should be txt files providing context about the user."""
    root_directory: Path = Path(directory).expanduser().resolve()

    documents: list[Document] = []
    sorted_file_paths = sorted(path for path in root_directory.glob("*.txt") if path.is_file())

    for file_path in sorted_file_paths:
        loaded_documents: list[Document] = TextLoader(str(file_path), encoding="utf-8").load()
        relative_path: str = file_path.relative_to(root_directory).as_posix()
        for document in loaded_documents:
            document.metadata["source_path"] = relative_path
            document.metadata["source_file_name"] = file_path.name
            document.metadata["source_type"] = "txt"
        documents.extend(loaded_documents)

    return documents