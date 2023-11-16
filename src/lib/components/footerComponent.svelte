<script lang="ts">
    export let isLogged:Boolean;
</script>

<!-- Footer container -->
<footer class="flex flex-col gap-4">

    <div class="flex flex-row justify-between items-start py-8 px-4 desktop-max:flex-col desktop-max:items-center">

        <div class="flex flex-row flex-1 gap-2 hover:cursor-pointer items-center">
            <img class="w-20" src="favicon.svg" alt="logo">
            <h2 class="text-xxl font-bold text-blue">FindMe</h2>
        </div>

        <div class="flex flex-1 flex-row justify-around desktop-max:flex-col desktop-max:py-8 desktop-max:gap-6">
            <div class="flex flex-col gap-4 desktop-max:items-center">
                <h3 class="text-lg font-bold text-blue">Navigation</h3>
                <ul class="flex flex-col gap-2 font-semibold desktop-max:items-center">
                    <li><a href="/"></a>Accueil</li>
                    {#if isLogged }
                        <li><a href="/profile">Profil</a></li>
                        <li><a href="/explore">Explorer</a></li>
                        <li><a href="/logout">Déconnexion</a></li>
                    {:else}
                        <li><a href="/register">Inscription</a></li>
                        <li><a href="/login">Connexion</a></li>
                        <li><a href="/about">A propos</a></li>
                    {/if}
                </ul>
            </div>

            <div class="flex flex-col gap-4 desktop-max:items-center">
                <h3 class="text-lg font-bold text-blue">Confidentialité</h3>
                <ul class="flex flex-col gap-2 font-semibold desktop-max:items-center">
                    <li><a href="/policy">Politique de confidentialité</a></li>
                    <li><a href="/legals">Mentions légales</a></li>
                </ul>
            </div>

            <div class="flex flex-col gap-4 desktop-max:items-center">
                <h3 class="text-lg font-bold text-blue">Contact</h3>
                <ul class="flex flex-col gap-2 font-semibold desktop-max:items-center">
                    <li>
                        <a href="#">
                            <i class="fa-regular fa-envelope"></i>
                            <span>FindMe@contact.com</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i class="fa-solid fa-mobile-screen-button"></i>
                            <span>0664992305</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </div>

    <div class="border-t-4 border-blue">
        <p class="text-center py-8 font-bold">&copy; Copyright 2023 - Tous les droits réservés.</p>
    </div>
  
</footer>