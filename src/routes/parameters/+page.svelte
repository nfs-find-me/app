<script lang="ts">
    import SettingComponent from '$lib/components/settingComponent.svelte';
    import { isLoggedStore } from '../../store/isLogged';
    import type { User } from '../../model/user/User';
    import type { PageData } from './$types';

    let isLogged: boolean;
	const subscribe = isLoggedStore.subscribe((v) => (isLogged = v));
    
    export let data: PageData;
    const user:User = data.user;

</script>

<SettingComponent {isLogged} {user}/>