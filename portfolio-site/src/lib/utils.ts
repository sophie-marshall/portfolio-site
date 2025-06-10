import type { Image } from '$lib/types';
import { PUBLIC_BASE_URL } from '$env/static/public';

export function constructImageUrl(image: Image): string {
	const imagePath = `${import.meta.env.DEV ? PUBLIC_BASE_URL : ''}${image.url}`;
	console.log(`Constructed image URL: ${imagePath}`);
	return imagePath;
}
