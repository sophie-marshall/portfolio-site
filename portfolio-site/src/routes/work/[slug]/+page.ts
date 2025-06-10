import type { Project } from '$lib/types';
import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	try {
		const response = await fetch(`http://localhost:8000/api/projects/${params.slug}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		});

		if (!response.ok) {
			throw error(404, `Project not found: ${params.slug}`);
		}

		const data: Project = await response.json();
		return {
			project: data
		};
	} catch (error) {
		console.error('Error fetching project:', error);

		return {
			project: null
		};
	}
}
