<script lang="ts">
	import VisitorHomeComponent from './visitorHomeComponent.svelte';
	import UserHomeComponent from './userHomeComponent.svelte';
	import { welcomeImages } from '../../store/images';
	import type { PageData } from '../../../.svelte-kit/types/src/routes/$types';
	import type { PostType } from '../../store/types';

	export let isLogged: Boolean;

	export let data: PageData;
	const posts = data.posts as PostType[];

	const welcomeImagesDisplay = welcomeImages;
</script>

{#if isLogged}
	<UserHomeComponent {posts} />
{:else}
	<VisitorHomeComponent {welcomeImagesDisplay} />
{/if}
