<script lang="ts">
	import HomeComponent from '$lib/components/homeComponent.svelte';
	import { isLoggedStore } from '../store/isLogged';
	let isLogged: boolean;
	const subscribe = isLoggedStore.subscribe((v) => (isLogged = v));

	import type { PageData } from './$types';

	export let data: PageData;
	const user = data.user;
	console.log({currentUser : user});

</script>

<HomeComponent {isLogged} />
