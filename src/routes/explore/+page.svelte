<script lang="ts">
    import type { PageData } from './$types';
    import HomeComponent from '$lib/components/homeComponent.svelte';
    import SearchComponent from '$lib/components/searchComponent.svelte';
    import { isLoggedStore } from '../../store/isLogged';

    let isLogged: boolean;
	const subscribe = isLoggedStore.subscribe((v) => (isLogged = v));
    
    export let data: PageData;
</script>

<SearchComponent />

<HomeComponent {isLogged} />