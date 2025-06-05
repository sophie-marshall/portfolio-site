import { blogs } from '$lib/data/blogs';
import { error } from '@sveltejs/kit';

export function load({ params }) {
    const blog = blogs.find(b => b.slug === params.slug);

    if (!blog) {
        throw error(404, 'Project not found');
    }

    return {
        blog
    };
}