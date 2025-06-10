import type { ProjectIndexAPIResponse, ProjectIndexItem } from '$lib/types';
import { PUBLIC_BASE_URL } from '$env/static/public';

export async function load({ fetch }) {
	try {
		const response = await fetch(`${PUBLIC_BASE_URL}/api/projects/`, {
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
