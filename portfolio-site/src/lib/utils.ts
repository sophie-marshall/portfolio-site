import type { Image } from '$lib/types';

export function constructImageUrl(image: Image): string {
	const imagePath = `${import.meta.env.DEV ? 'http://localhost:8000/api' : ''}${image.url}`;
	console.log(`Constructed image URL: ${imagePath}`);
	return imagePath;
}
