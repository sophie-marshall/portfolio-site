import type { ProjectHighlight } from '$lib/types';

export interface ProjectSandbox {
	slug: string;
	id: number;
	title: string;
	subtitle: string;
	hero_image: string;
	tags: string[];
	stack: string[];
	external_link: string;
	problem: string;
	approach: string;
}

export const sampleProject: ProjectSandbox = {
	slug: 'agentic-data-engineering',
	id: 1,
	title: 'Agentic Data Engineering',
	subtitle: 'What if data pipelines could be autonomous agents?',
	hero_image: '/images/agentic-data-engineering.png',
	tags: ['AI', 'Data Engineering'],
	stack: ['Python', 'Airflow', 'Langchain', 'AWS'],
	external_link: 'https://github.com/sophie-marshall/agentic-data-engineering',
	problem:
		'<p>As technology evolves, so do the demands we place on our data systems. Increasingly, modern workflows rely on raw or unstructured data, making traditional pipelines built on hardcoded logic brittle and unsustainable.</p><p>Agent-based workflows offer a compelling solution. With lightweight tools, we can embed AI-powered decision-making into pipelines to help intelligently classify incoming data and schedule the appropriate processing job. Even better, these agents can also be coached to dynamically adapt to the context at hand – whether it’s a schema shift, a change in data format, or unexpected content!</p><p>Incorporating this flexibility could mark a turning point in how we build and maintain resilient data systems.</p>',
	approach:
		'<p>This agent-based system mirrors many aspects of a traditional ETL pipeline—but with one major distinction: decision-making is offloaded to an agent. Rather than relying on hardcoded task dependencies, the agent uses contextual information to determine which job to trigger next.</p><p>In a conventional setup, logic like “if filetype is X, schedule job Y” would be explicitly written into the pipeline. With agents, those rigid rules are replaced by flexible, AI-powered reasoning. Here, a combination of metadata and a file preview is passed to the agent, who selects the appropriate processing job using Airflow’s TaskFlow API.</p><p>After transformation, the processed data is written to its final destination—in this case, a silver-tier S3 bucket—ready for downstream use.</p>'
};
