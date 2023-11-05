import { writable } from 'svelte/store';

export const isLogged = writable(false);

export function connected(state: boolean) {
	isLogged.update(() => state);
}
