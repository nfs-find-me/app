<script lang="ts">
    export let welcomeImages: Array<{ src: string; handle: string }>;
</script>

<!-- Welcome Page -->

<section class="flex flex-col h-90 tablet-max:h-screen items-center gap-14 py-10">

    <h1 class="font-normal text-center text-50 py-4 desktop-max:text-40">Devinez l'emplacement, gagnez des points !</h1>

    <div class="flex flex-row w-9/12 justify-between py-6 desktop-xl-max:overflow-x-scroll">
        {#each welcomeImages as image, index}
            <img class="w-233 h-326 desktop-xl-max:w-full desktop-xl-max:h-full desktop-xl:rounded-15
            {index % 2 === 0 ? 'slide-in-bottom-before' : 'slide-in-bottom-after desktop-xl:mt-20'}" src="{image.src}" alt="{image.handle}" />
        {/each}
    </div>
    
    <div class="tablet-max:hidden">
        <a href="#"><i class="fa-solid fa-circle-arrow-down animate-bounce text-50 text-blue"></i></a>
    </div>
    
</section>