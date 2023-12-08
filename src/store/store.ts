import { writable } from 'svelte/store';

export const store = writable({
	posts: null
});

export function setPosts(posts: any) {
	store.update((store) => {
		return {
			...store,
			posts: posts
		};
	});
}

export function getPosts() {
	return store.subscribe((store) => store.posts);
}
