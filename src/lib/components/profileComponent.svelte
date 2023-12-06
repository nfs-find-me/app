<script lang="ts">
	import { User } from "../../model/user/User";

    let onglet: string = 'content';
    export let user:User;
    const countFollowers = user.followers?.length;
    const countFollowing = user.following?.length;

    function sectionChange(newOnglet: string){
            onglet = newOnglet;
    }

</script>

<section>
    <div class="w-full flex flex-col justify-center items-center gap-6 my-10">

        {#if (user.avatar != null)}
            <img class="w-40 h-40 rounded-full hover:cursor-pointer" src={user.avatar} alt="image de profil">
        {:else}
            <img class="w-40 h-40 rounded-full hover:cursor-pointer" src="user_default.webp" alt="image de profil">
        {/if}

        <div class="flex flex-col items-center">
            <h2 class="font-bold text-xxl">{user.username}</h2>
            <p>{user.email}</p>
            <p>{countFollowers} abonnement - {countFollowing} abonné</p>
            <p class="text-lg font-bold"><span class="text-blue">{user.score}</span> points</p>
        </div>
    </div>

    <div class="w-full flex justify-center items-center">
        <ul class="w-3/12 flex flex-row justify-center text-center">
            <li class="w-full">
                <span on:click={() => sectionChange('content')} class="inline-block w-full p-4 text-lg cursor-pointer {onglet === 'content' ? 'text-blue font-bold border-b-4 border-blue' : 'text-black'}">Contenu</span>
            </li>
            <li class="w-full">
                <span on:click={() => sectionChange('createContent')} class="inline-block w-full p-4 text-lg cursor-pointer {onglet === 'createContent' ? 'text-blue font-bold border-b-4 border-blue' : 'text-black'}">Créer</span>
            </li>
        </ul>
    </div>

{#if onglet == "content"}
    <p>Contenu !</p>
{:else if onglet == "createContent"}
    <p>Créer !</p>
{/if}

</section>