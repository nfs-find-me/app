<script lang="ts">
    export let isLogged:Boolean;
  </script>
  
  <nav class="flex justify-between items-center p-4">
    <div class="flex flex-row gap-2 items-center hover:cursor-pointer">
        <img class="w-20" src="favicon.svg" alt="logo">
        <h2 class="text-xxl font-bold text-blue">FindMe</h2>
    </div>

    <ul class="flex gap-6 font-bold text-lg">
        <li class="hover:cursor-pointer hover:text-blue">Accueil</li>
        {#if isLogged }
            <li class="hover:cursor-pointer hover:text-blue">Explorer</li>
            <li class="hover:cursor-pointer hover:text-blue">Classement</li>
        {:else}
            <li class="hover:cursor-pointer hover:text-blue">A propos</li>
        {/if}
        
    </ul>
    
    <div class="flex gap-6 flex items-center">
        {#if isLogged }
            <i class="fa-solid fa-gear text-35 hover:cursor-pointer hover:text-blue"></i>
            <img class="w-16 h-16 rounded-50 hover:cursor-pointer" src="profil_picture.jpg" alt="image de profil">
        {:else}
            <button class="btn-primary">Se connecter</button>
            <button class="btn-secondary">S'inscrire</button>
        {/if}
    </div>
</nav>
