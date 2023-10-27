<script lang="ts">
	import VisitorHomeComponent from './visitorHomeComponent.svelte';
	import UserHomeComponent from './userHomeComponent.svelte';
	import { welcomeImages } from '../store/images';

	export let isLogged: Boolean;

	const postImage = welcomeImages;
	const welcomeImagesDisplay = welcomeImages;
</script>

{#if isLogged}
	<UserHomeComponent {postImage} />
{:else}
	<VisitorHomeComponent {welcomeImagesDisplay} />
{/if}
