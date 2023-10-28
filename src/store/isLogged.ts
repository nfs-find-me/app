import { writable } from 'svelte/store';

export const isLogged = writable(false);

export function connected(state: boolean) {
	console.log('connected store', { state });

	isLogged.update(() => state);
}
