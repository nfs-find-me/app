<script lang="ts">
	import type { User } from "../model/user/User";

let onglet: string = 'content';
// let currentUser!: User;

function sectionChange(newOnglet: string){
        onglet = newOnglet;
}

</script>

<section>
    <div class="w-full flex flex-col justify-center items-center gap-6 my-10">
        <img class="w-40 h-40 rounded-full hover:cursor-pointer" src="profil_picture.jpg" alt="image de profil">

        <div class="flex flex-col items-center">
            <h2 class="font-bold text-xxl">JohnDoe</h2>
            <p>johndoe@gmail.com</p>
            <p>0 abonnement - 0 abonné</p>
            <p class="text-lg font-bold"><span class="text-blue">256</span> points</p>
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