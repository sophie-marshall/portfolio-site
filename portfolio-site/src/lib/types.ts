export interface ProjectIndexAPIResponse {
	meta: {
		total_count: number;
	};
	items: ProjectIndexItem[];
}

export interface Image {
	url: string;
	full_url: string;
	width: number;
	height: number;
	alt: string;
}

export interface ProjectIndexItem {
	id: number;
	meta: {
		slug: string;
	};
	title: string;
	description: string;
	hero_image: Image;
	external_link: string[] | null;
	tags: string[];
}
