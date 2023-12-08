<script lang="ts">
	import ClassementComponent from '$lib/components/classementComponent.svelte';
	import type { PageData } from './$types';

	let isLogged: boolean;

	export let data: PageData;
</script>

<ClassementComponent {isLogged} />
