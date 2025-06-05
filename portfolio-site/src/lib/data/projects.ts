export interface Content {
    type: "text" | "image" | "dual-image";
    text?: string;
    image?: string | string[];
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
                text: "<a class='inline-link' href='/blog/reimagining-the-interview-process-with-rag'>ResumeRAG reimagines the interview process as we know it.</a> Instead of generic phone screens and surface-level resume scans, what if candidates could upload rich materials—resumes, portfolios, personal statements—and let AI do the talking? "
            },
            {
                type: "text",
                text: "The primary goals of this project were to: <ol><li>Build an ETL pipeline robust enough to handle both structure and unstructured data</li><li>Explore available vector storage solutions</li><li>Walk away with a working prototype to share</li></ol>"
            },
            {
                type: "text",
                text: "Let's get into the details!"
            },
            {
                type: "image",
                image: "/images/airflow.png",
            },
            {
                type: "text",
                text: "The pipeline is orchestrated using <a class='inline-link' href='https://airflow.apache.org/'>Apache Airflow</a>, with modular components handling extraction, transformation, and loading (ETL). Currently, a set of hardcoded rules determines how raw data is routed to the right transformation function. In future iterations, I’d like to integrate existing <a class='inline-link' href='/work/agentic-data-engineering'>Agentic Data Engineering</a> work to make that process smarter—leveraging an LLM to dynamically route data based on content and context."
            },
            {
                type: "dual-image",
                image: ["/images/pinecone.jpg", "/images/pgvector.png"],
            },
            {
                type: "text",
                text: "There’s no shortage of vector storage solutions out there—new ones seem to launch every month. For this project, we explored both <a class='inline-link' href='https://www.pinecone.io/'>Pinecone</a> and <a class='inline-link' href='https://github.com/pgvector/pgvector'>PostgreSQL with pgvector</a> enabled."
            },
            {
                type: "text",
                text: "While Pinecone was fun to experiment with, <span class='span-color-text'>PostgreSQL ultimately proved to be the better fit</span>. It lets us tap into the power of relational databases while also meeting users (myself included) where they already are—no need to learn a whole new system just to get started with vector search."
            }
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