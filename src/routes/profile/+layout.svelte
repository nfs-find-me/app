<script lang="ts">
	import ProfileComponent from '$lib/components/profileComponent.svelte';
	import type { LayoutData } from './$types';
	import type { User } from '../../model/user/User';
	export let data: LayoutData;

	const user: User = data.user;
</script>


<!-- svelte-ignore missing-declaration -->
<ProfileComponent {user} />

<slot />
