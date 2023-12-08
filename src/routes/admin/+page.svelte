<script lang="ts">
	import type { User } from '../../model/user/User';
	import type { Post } from '../../model/post/Post';
	import type { PageData } from './$types';
	import TableUser from '$lib/components/tableUser.svelte';
	import TablePost from '$lib/components/tablePost.svelte';

	export let data: PageData;
	const users = data.user.users as User[];
	const posts = data.post.posts as Post[];

	let tabSelected = 'users';
</script>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
	<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
		<ul
			class="flex flex-wrap -mb-px text-sm font-medium text-center"
			id="default-tab"
			data-tabs-toggle="#default-tab-content"
			role="tablist"
		>
			<li class="me-2" role="presentation">
				<button
					class="inline-block p-4 border-b-2 rounded-t-lg"
					id="users-tab"
					data-tabs-target="#users"
					type="button"
					role="tab"
					aria-controls="users"
					aria-selected="false"
					on:click={() => (tabSelected = 'users')}>Users</button
				>
			</li>
			<li class="me-2" role="presentation">
				<button
					class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
					id="posts-tab"
					data-tabs-target="#posts"
					type="button"
					role="tab"
					aria-controls="posts"
					aria-selected="false"
					on:click={() => (tabSelected = 'posts')}>Posts</button
				>
			</li>
		</ul>
	</div>
	<div id="default-tab-content">
		<div
			class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
			class:my-class={tabSelected === 'posts' ? 'hidden' : ''}
			id="posts"
			role="tabpanel"
			aria-labelledby="posts-tab"
		>
			{#if tabSelected === 'posts'}
				<TablePost {posts} />
			{:else if tabSelected === 'users'}
				<TableUser {users} />
			{/if}
		</div>
	</div>
</div>
