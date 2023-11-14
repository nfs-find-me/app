<script lang="ts">
    import ClassementComponent from '$lib/components/classementComponent.svelte';
    import { isLoggedStore } from '../../store/isLogged';
    import type { PageData } from './$types';


    let isLogged: boolean;
	const subscribe = isLoggedStore.subscribe((v) => (isLogged = v));
    
    export let data: PageData;
</script>

<ClassementComponent {isLogged}/>