from rag.document_loader import load_documents

def main():
    documents = load_documents("./back-end/data")
    print(f"Loaded {len(documents)} documents.")

if __name__ == "__main__":
    main()