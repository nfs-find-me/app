<script lang="ts">
	import HomeComponent from '$lib/components/homeComponent.svelte';
	import { isLoggedStore } from '../store/isLogged';
	let isLogged: boolean;
	const subscribe = isLoggedStore.subscribe((v) => (isLogged = v));
</script>

<HomeComponent {isLogged} />
