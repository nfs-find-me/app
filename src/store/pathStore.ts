import { type Writable, writable } from 'svelte/store';

export const currentPage = writable('home');
export const currentImage: Writable<string | null> = writable(null);

export function handlePageClick(page: string, post: string | null = null) {
	if (post) {
		currentImage.update(() => post);
	}
	currentPage.update(() => page);
}
