<script lang="ts">
    import ErrorCard from "./errorCard.svelte";
    import AccountSettingComponent from "./accountSettingComponent.svelte";
    
    let errorMessage = "Vous n'êtes pas autorisé à accéder à ce contenu.";
    let ongletInfo = {id: 1, name: "Mon compte"};

    export let isLogged: Boolean;

    function updateOngletInfo(id:number, name:string){
        ongletInfo = {id: id, name: name};
    }

</script>

{#if isLogged}

    <div id="ongletBanner" class="mt-10">
        <h2 class="py-8 px-16 text-xxl bg-blue-dark text-white font-bold">{ ongletInfo.name }</h2>
    </div>

    <section class="flex flex-row">
        <nav class="w-1/5 bg-white-secondary border-r-4 border-blue-dark flex flex-col justify-between">
            <ul class="py-10 px-4 flex flex-col gap-4">
                <li on:click={() => updateOngletInfo(1, "Mon compte")} class="p-4 flex flex-row gap-4 items-center cursor-pointer">
                    <i class="fa-regular fa-user text-xl text-blue font-bold"></i>
                    <span class="text-lg text-blue font-bold">Mon compte</span>
                </li>
                <li on:click={() => updateOngletInfo(2, "Sécurité")} class="p-4 flex flex-row gap-4 items-center cursor-pointer">
                    <i class="fa-solid fa-key text-xl text-text-contrast"></i>
                    <span class="text-lg text-text-contrast">Sécurité</span>
                </li>
            </ul>
        
            <div class="p-8 flex flex-row gap-4 items-center cursor-pointer">
                <i class="fa-solid fa-arrow-right-from-bracket text-lg text-alert font-bold"></i>
                <span class="text-lg text-alert font-bold">Déconnexion</span>
            </div>
        </nav>

        {#if ongletInfo.id === 1}
            <AccountSettingComponent></AccountSettingComponent>
        {/if}

    </section>

{:else}
    <ErrorCard {errorMessage}></ErrorCard>
{/if}