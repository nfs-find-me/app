<script lang="ts">
	import PostComponent from '$lib/components/postComponent.svelte';
	import { isLoggedStore } from '../../../store/isLogged';
	import type { User } from '../../../model/user/User';
	import type { PageData } from './$types';

	let isLogged: boolean;
	const subscribe = isLoggedStore.subscribe((v) => (isLogged = v));

	export let data: PageData;
	const postId: string = data.postId;
</script>

<PostComponent {postId} />
