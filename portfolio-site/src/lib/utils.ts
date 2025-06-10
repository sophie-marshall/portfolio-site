import type { Image } from '$lib/types';

export function constructImageUrl(image: Image): string {
	const imagePath = `${import.meta.env.DEV ? 'http://localhost:8000/' : ''}${image.url}`;
	return imagePath;
}
