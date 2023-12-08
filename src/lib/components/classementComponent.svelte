<script lang="ts">
	import ErrorCard from "./common/errorCard.svelte";
    import UserScoreComponent from "./userScoreComponent.svelte";

    export let isLogged: Boolean;
    let errorMessage = "Vous n'êtes pas autorisé à accéder à ce contenu.";
    let onglet: string = 'global';

    let userInfos: Array<{ username: string; src: string; score: number }> = [
		{username: 'John Doe', src:'profil_picture.jpg', score: 1578},
		{username: 'User 2', src:'profil_picture.jpg', score: 1420},
		{username: 'User 3', src:'profil_picture.jpg', score: 1022},
		{username: 'User 4', src:'profil_picture.jpg', score: 1000},
	];

    function sectionChange(newOnglet: string){
        onglet = newOnglet;

        if(onglet === 'global'){
            userInfos = [
                {username: 'John Doe', src:'profil_picture.jpg', score: 1578},
                {username: 'User 2', src:'profil_picture.jpg', score: 1420},
                {username: 'User 3', src:'profil_picture.jpg', score: 1022},
                {username: 'User 4', src:'profil_picture.jpg', score: 1000},
            ];
        }else{
            userInfos = [
                {username: 'Follower1', src:'profil_picture.jpg', score: 1578},
                {username: 'Follower2', src:'profil_picture.jpg', score: 1420},
                {username: 'Follower3', src:'profil_picture.jpg', score: 1022},
                {username: 'Follower4', src:'profil_picture.jpg', score: 1000},
            ];
        }
    }

</script>

{#if isLogged}



    <div class="w-full flex justify-center items-center">
        <ul class="w-3/12 flex flex-row justify-center text-center">
            <li class="w-full">
                <span on:click={() => sectionChange('global')} class="inline-block w-full p-4 text-lg cursor-pointer {onglet === 'global' ? 'text-blue font-bold border-b-4 border-blue' : 'text-black'}">Général</span>
            </li>
            <li class="w-full">
                <span on:click={() => sectionChange('follower')} class="inline-block w-full p-4 text-lg cursor-pointer {onglet === 'follower' ? 'text-blue font-bold border-b-4 border-blue' : 'text-black'}">Abonnement</span>
            </li>
        </ul>
    </div>

    <UserScoreComponent {userInfos}></UserScoreComponent>

{:else}
    <ErrorCard {errorMessage}></ErrorCard>
{/if}