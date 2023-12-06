<script lang="ts">
	import PostComponent from '$lib/components/postComponent.svelte';
	import { isLoggedStore } from '../../../store/isLogged';
	import type { User } from '../../../model/user/User';
	import type { PageData } from './$types';
	import type { PostType } from '../../../store/types';
	import { error, redirect } from '@sveltejs/kit';

	// let isLogged: boolean;
	// const subscribe = isLoggedStore.subscribe((v) => (isLogged = v));
	//
	export let data: PageData;
	if (!data.post) {
		throw error(404, 'Not found');
	}
	const post: PostType = data.post.post;
	// const postId: string = data.postId;
	console.log(data);
	console.log(post);
</script>

<PostComponent {post} />
