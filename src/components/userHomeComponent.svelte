<script lang="ts">
    import { currentPage } from "../store/pathStore";

    export let postImage: Array<{ src: string; handle: string }>;
</script>

{#if $currentPage == "explore"}
    <p>Explore page Here !!</p>
{/if}

<section>
    <div class="w-full p-5 mx-auto m-10 gap-5 columns-1 space-y-5 tablet-sm:columns-3 tablet:columns-4 laptop:columns-5 ">
        {#each postImage as image}
            <div class="relative overflow-hidden hover:cursor-pointer">
                <img class="w-full transition duration-300 ease-in-out hover:scale-110" src="{image.src}" alt="{image.handle}">
                <div class="absolute bottom-2 right-2 flex gap-2 items-center bg-white-secondary opacity-70 p-2 rounded-full">
                    <i class="fa-solid fa-eye"></i>
                    <span class="text-gray-500">5</span>
                </div>
            </div>
        {/each}
    </div>
</section>




