<script lang="ts">
	import PostComponent from '$lib/components/postComponent.svelte';
	import type { PageData } from './$types';
	import type { PostType } from '../../../store/types';
	import { error } from '@sveltejs/kit';

	export let data: PageData;
	if (!data.post) {
		throw error(404, 'Not found');
	}
	const post: PostType = data.post.post;
	console.log(data);
	console.log(post);
</script>

<PostComponent {post} />
