<script lang="ts">
	import SettingComponent from '$lib/components/settingComponent.svelte';
	import type { User } from '../../model/user/User';
	import type { PageData } from './$types';

	let isLogged: boolean;

	export let data: PageData;
	const user: User = data.user;
</script>

<SettingComponent {isLogged} {user} />
