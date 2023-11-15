<script lang="ts">
	import type { User } from '../../model/user/User';
	import type { Post } from '../../model/post/Post';
	import type { PageData } from './$types';
	import TableUser from '$lib/components/tableUser.svelte';
	import TablePost from '$lib/components/tablePost.svelte';

	export let data: PageData;
	const users = data.user.users as User[];
	const posts = data.post.posts as Post[];
</script>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
	<div class="w-full">
		<div class="relative right-0">
			<ul
				class="relative flex list-none flex-wrap rounded-lg bg-blue-gray-50/60 p-1"
				data-tabs="tabs"
				role="list"
			>
				<li class="z-30 flex-auto text-center">
					<a
						class="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
						data-tab-target=""
						active
						role="tab"
						aria-selected="true"
					>
						<span class="ml-1">HTML</span>
					</a>
				</li>
				<li class="z-30 flex-auto text-center">
					<a
						class="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
						data-tab-target=""
						role="tab"
						aria-selected="false"
					>
						<span class="ml-1">React</span>
					</a>
				</li>
				<li class="z-30 flex-auto text-center">
					<a
						class="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
						data-tab-target=""
						role="tab"
						aria-selected="false"
					>
						<span class="ml-1">Vue</span>
					</a>
				</li>
				<li class="z-30 flex-auto text-center">
					<a
						class="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
						data-tab-target=""
						role="tab"
						aria-selected="true"
					>
						<span class="ml-1">Angular</span>
					</a>
				</li>
				<li class="z-30 flex-auto text-center">
					<a
						class="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
						data-tab-target=""
						role="tab"
						aria-selected="true"
					>
						<span class="ml-1">Svelte</span>
					</a>
				</li>
			</ul>
		</div>
	</div>

	<TableUser {users} />
	<TablePost {posts} />
</div>
