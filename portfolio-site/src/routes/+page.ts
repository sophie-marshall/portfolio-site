import type { ProjectIndexAPIResponse, ProjectIndexItem } from '$lib/types';
import { projects } from '$lib/data/projects';

export async function load() {
	try {
		const response = await fetch('http://localhost:8000/api/projects/', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		});

		if (!response.ok) {
			throw new Error(`HTTP Error fetching Project Index Page: ${response.status}`);
		}

		const data: ProjectIndexAPIResponse = await response.json();

		return {
			projectIndex: data.items
		};
	} catch (error) {
		console.error('Error fetching project index:', error);

		return {
			projectIndex: [] as ProjectIndexItem[]
		};
	}
}
