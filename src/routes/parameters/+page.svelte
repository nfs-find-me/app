<script lang="ts">
    import SettingComponent from '$lib/components/settingComponent.svelte';
    import { isLoggedStore } from '../../store/isLogged';
    import type { PageData } from './$types';

    let isLogged: boolean;
	const subscribe = isLoggedStore.subscribe((v) => (isLogged = v));
    
    export let data: PageData;
</script>

<SettingComponent {isLogged}/>