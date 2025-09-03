import type { Image } from '$lib/types';
import { env } from '$env/dynamic/private';


export function constructImageUrl(image: Image): string {
	const imagePath = `${import.meta.env.DEV ? env.PUBLIC_BASE_URL : ''}${image.url}`;
	console.log(`Constructed image URL: ${imagePath}`);
	return imagePath;
}
