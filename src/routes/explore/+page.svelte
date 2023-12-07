<script lang="ts">
	import type { PageData } from '../$types';
	import HomeComponent from '$lib/components/homeComponent.svelte';
	import SearchComponent from '$lib/components/searchComponent.svelte';
	import { isLoggedStore } from '../../store/isLogged';
	import { goto } from '$app/navigation';

	let isLogged: boolean;
	const subscribe = isLoggedStore.subscribe((v) => (isLogged = v));

	export let data: PageData;
	let searchTerm = '';
	function handleSubmit() {
		console.log('searchTerm', searchTerm);
		goto(`/explore?search=${searchTerm}`);
	}
</script>

<div class="m-auto w-11/12 tablet:w-1/3 mt-6">
	<form on:submit|preventDefault={handleSubmit}>
		<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only"
			>Rechercher ...</label
		>
		<div class="relative block w-full p-4 pl-14 text-md rounded-50 border-2 border-blue">
			<div class="absolute inset-y-0 left-0 flex items-center pl-3">
				<i class="fa-solid fa-magnifying-glass text-xl" />
			</div>
			<input
				type="search"
				name="search"
				bind:value={searchTerm}
				placeholder="Rechercher par utilisateur"
			/>
			<button type="submit">Envoyer</button>
		</div>
	</form>
</div>

<SearchComponent />

<HomeComponent {data} {isLogged} />
