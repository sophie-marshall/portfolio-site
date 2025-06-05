export interface Content {
    type: "text" | "image" | "dual-image";
    text?: string;
    image?: string | string[];
}

export type Blog = {
    title: string;
    slug: string;
    description?: string;
    datePublished: string;
    content?: Content[];
}

export const blogs: Blog[] = [
    {
        title: "Reimagining the Interview Process with RAG",
        slug: "reimagining-the-interview-process-with-rag",
        description: "Exploring how Retrieval Augmented Generation (RAG) can transform the interview process",
        datePublished: "2023-10-01",
        content: [
            {
                type: "text",
                text: "<span class='span-color-text'>ResumeRAG reimagines the interview process as we know it.</span> Instead of generic phone screens and surface-level resume scans, what if candidates could upload rich materials—resumes, portfolios, personal statements—and let AI do the talking?"
            }
        ]
    }
]