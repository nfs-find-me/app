<script lang="ts">
    import UpdateUserComponent from '$lib/components/updateUserComponent.svelte';
    import type { PageData } from './$types';
    import type { User } from '../../../model/user/User';
    
    export let data: PageData;

    const user: User = data.user;
    if(user.avatar == null){
        user.avatar = "/user_default.webp"
    }

</script>

<UpdateUserComponent {user}></UpdateUserComponent>