<script lang="ts">
    import ProfileComponent from '$lib/components/profileComponent.svelte';
    import type { User } from '../../model/user/User';
    import type { PageData } from './$types';

    export let data: PageData;
    const user:User = data.user;

console.log(user)
</script>

<ProfileComponent {user} />

