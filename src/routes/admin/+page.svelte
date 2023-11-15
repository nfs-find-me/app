<script lang="ts">
	import type { User } from '../../model/user/User';
	import type { PageData } from './$types';

	export let data: PageData;
	const users = data.users as User[];
	console.log(users);
</script>

{#each users as user}
	<div>
		{user.username}
	</div>
{/each}
