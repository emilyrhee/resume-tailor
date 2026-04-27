export interface InvokeRequest {
    query: string;
    resume: string;
    k?: number;
}

export interface RetrievedDocument {
    score: number;
    content: string;
}

export interface InvokeResponse {
    query: string;
    k: number;
    retrieved: RetrievedDocument[];
    generated_prompt: string;
    response: string;
}

export async function askAssistant(req: InvokeRequest): Promise<InvokeResponse> {
    const response = await fetch('/invoke', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    });

    if (!response.ok) {
        let errorDetail = `Server error: ${response.status}`;
        try {
            const errData = await response.json();
            if (errData.detail) {
                errorDetail = Array.isArray(errData.detail) 
                    ? JSON.stringify(errData.detail) 
                    : errData.detail;
            }
        } catch (e) {
            // ignore JSON parse error
        }
        throw new Error(errorDetail);
    }

    return await response.json();
}
