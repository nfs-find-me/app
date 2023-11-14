<script>
    import Button from "./common/button.svelte";

</script>

<section id="accountInfo" class="flex flex-col w-full px-10 py-16 gap-14">
    <div class="flex flex-col gap-8 tablet-sm:gap-4">
        <h2 class="text-xl font-bold text-blue">Information du compte</h2>

        <div class="flex flex-col gap-8 tablet-sm:gap-0 tablet-sm:flex-row items-center justify-between">
            <div>
                <div class="flex flex-col tablet-sm:flex-row gap-8 items-center">
                    <img class="w-20 h-20 rounded-50 hover:cursor-pointer" src="profil_picture.jpg" alt="image de profil">
        
                    <div>
                        <p class="text-lg">Nom d'utilisateur : <span class="font-bold text-lg">John Doe</span></p>
                        <p class="text-lg">Adresse email : <span class="font-bold text-lg">johndoe@gmail.com</span></p>
                    </div>
                </div>
            </div>
            
            <div>
                <Button link={'login'} fill={true} text={'Modifier'} />
            </div>
        </div>
    </div>

    <div id="accountInfo" class="w-full flex flex-col gap-8 tablet-sm:gap-4">
        <h2 class="text-xl font-bold text-blue">Suppression du compte</h2>

        <div class="flex flex-col gap-8 tablet-sm:gap-0 tablet-sm:flex-row justify-between items-center">
            <div class="flex flex-row gap-4 items-center">
                <i class="fa-solid fa-triangle-exclamation text-md tablet-sm:text-lg text-alert"></i>
                <p class="text-alert font-bold text-md tablet-sm:text-lg">Cette action est définitive et supprime toutes les données associées au compte.</p>
            </div>
            <Button color={'red'} fill={true} text={'Supprimer'} />
        </div>
        
    </div>
</section>