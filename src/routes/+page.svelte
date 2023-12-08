<script lang="ts">
	import HomeComponent from '$lib/components/homeComponent.svelte';
	import { isLoggedStore } from '../store/isLogged';
	import type { Post } from '../model/post/Post';
	import type { PageData } from './$types';
	let isLogged: boolean;

	export let data: PageData;
</script>

<HomeComponent {data} {isLogged} />
