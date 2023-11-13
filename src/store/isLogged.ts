import { writable } from 'svelte/store';

export const isLoggedStore = writable(false);

export function connected(state: boolean) {
	isLoggedStore.update(() => state);
}
