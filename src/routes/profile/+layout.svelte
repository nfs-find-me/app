<script lang="ts">
    import ProfileComponent from '$lib/components/profileComponent.svelte';
    import type { LayoutData } from './$types';
    import type { User } from '../../model/user/User';
    export let data: LayoutData;

    const user: User = data.user;
    if(user.avatar == null){
        user.avatar = "/user_default.webp"
    }
</script>


<ProfileComponent {user} />

<slot />