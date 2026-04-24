def build_prompt(resume: str, query: str, context: str) -> str:
    """Builds a prompt for the language model based on the resume, job 
    description, and relevant experience."""
    return prompt_template.format(resume=resume, query=query, context=context)


prompt_template = """
    You are an expert resume writer.
    The resume text below was extracted from a LaTeX source, 
    so treat it as a parsed LaTeX resume and preserve the intent of the 
    original formatting when tailoring it to the job description.

    Do not include any prose, headings, bullets, explanations, or notes before 
    or after the code block.
    Do not use nonstandard or unavailable packages (especially do not include 
    `empty` package).

    Resume:
    {resume}

    Job Description:
    {query}

    Relevant Experience:
    {context}
"""