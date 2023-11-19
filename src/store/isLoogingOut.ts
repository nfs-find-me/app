import { writable } from 'svelte/store';

export const isLoggingOutStore = writable(false);

export function isLoggingOut() {
	isLoggingOutStore.update(() => true);
}
export function isLoggingOutReset() {
	isLoggingOutStore.update(() => false);
}
