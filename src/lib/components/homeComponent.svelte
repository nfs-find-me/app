<script lang="ts">
	import VisitorHomeComponent from './visitorHomeComponent.svelte';
	import UserHomeComponent from './userHomeComponent.svelte';
	import { welcomeImages } from '../../store/images';
	import type { Post } from '../../model/post/Post';
	import type { PageData } from '../../../.svelte-kit/types/src/routes/$types';
	import type { PostType } from '../../store/types';

	export let isLogged: Boolean;

	export let data: PageData;
	console.log('data', data);
	const postImage = data.posts as PostType[];
	console.log('posts', postImage);

	// TODO: récupérer les posts findAll et supprimer image.ts
	const welcomeImagesDisplay = welcomeImages;
</script>

{#if isLogged}
	<UserHomeComponent {postImage} />
{:else}
	<VisitorHomeComponent {welcomeImagesDisplay} />
{/if}
