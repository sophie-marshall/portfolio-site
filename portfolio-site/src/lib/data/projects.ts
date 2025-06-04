export interface Content {
    type: "text" | "image";
    text?: string;
    image?: string;
}

export type Project = {
    title: string;
    slug: string;
    description: string;
    image?: string;
    link?: string;
    content?: Content[];
};

export const projects: Project[] = [
    {
        title: "Resume RAG",
        slug: "resume-rag",
        description: "Rethinking the interview process with Retrieval Augmented Generation (RAG)",
        image: "/images/resume-rag.png",
        link: "https://github.com/sophie-marshall/resume-rag",
        content: [
            {
                type: "text",
                text: "ResumeRAG reimagines the interview process with <span>Retrieval Augmented Generation (RAG)</span>. Instead of generic phone screens and surface-level resume scans, what if candidates could upload rich materials—resumes, portfolios, personal statements—and let AI do the talking? This project explores how RAG can surface deeper, more personalized insights from your real experience.",
            },

            {
                type: "text",
                text: "During the <span>retrieval</span> phase, embedded text is searched semantically—matching natural language queries to the context provided by the user. This enables more nuanced and relevant responses, helping AI move beyond basic keyword matching and into deeper, more meaningful interview conversations.",
            },
            {
                type: "text",
                text: "Results from the retrieval phase are used to <span>augment</span> an LLM’s <span>generated</span> output. With the right prompting techniques, we can guide the model to respond using only your curated documents—rather than its broad, general training data. This significantly reduces the risk of hallucinations and keeps conversations grounded in the context you care about."
            },
            {
                type: "image",
                image: "/images/resume-rag.png",
                text: "This should be replaced with ETL diagram"
            },
            {
                type: "text",
                text: "Something about extracting data from different sources. Another thing about embedding the content. A final note about specialized data storage with vector search enabled."
            },
            {
                type: "text",
                text: "Additional comments about evolving vector storage and retrieval techniques and store offerings"
            },
        ]
    },
    {
        title: "Agentic Data Engineering",
        slug: "agentic-data-engineering",
        description: "What if data pipelines could be autonomous agents?",
        image: "/images/agentic-data-engineering.png",
        link: "https://github.com/sophie-marshall/agentic-data-engineering"
    },
    {
        title: "Sophie's Spotify",
        slug: "sophies-spotify",
        description: "A pipeline to extract most recent listening history and import to Postgres for further analysis",
        image: "/images/sophies-spotify.png",
        link: "https://github.com/sophie-marshall/sophies-spotify"
    },
    {
        title: "Rust Crawling API",
        slug: "rust-crawling-api",
        description: "A web crawling API built with Rust, designed for high performance and scalability",
        image: "/images/rust-crawling-api.png",
        link: "https://github.com/sophie-marshall/rust-web-scraping"
    },
    {
        title: "PBS Passthrough",
        slug: "pbs-passthrough",
        description: "Amazon X-Ray clone for PBS Hack Days 2024",
        image: "/images/pbs-passthrough.png",
        link: "https://github.com/sophie-marshall/pbs-passthrough"
    },
]; 