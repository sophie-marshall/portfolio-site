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

export interface ProjectMeta {
	type: string;
	detail_url: string;
	html_url: string;
	slug: string;
	show_in_menus: boolean;
	seo_title: string;
	search_description: string;
	first_published_at: string;
	alias_of: any | null;
	parent: {
		id: number;
		meta: {
			type: string;
			html_url: string;
		};
		title: string;
	};
}

export interface ProjectContent {
	type: string;
	value: {
		type: 'text' | 'image';
		text?: string;
		image?: number;
	};
	id: string;
}
export interface Project {
	id: number;
	meta: ProjectMeta;
	title: string;
	subtitle: string;
	hero_image: Image;
	external_link: string[] | null;
	tags: string[];
	problem: string;
	approach: string;
}

export interface Message {
	text: string;
	role: 'user' | 'assistant';
	timestemp?: string;
}
