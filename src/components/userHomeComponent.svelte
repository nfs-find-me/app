<script lang="ts">
    export let postImage: Array<{ src: string; handle: string }>;

    // Groupez les images par 4
    const groupedImages: Array<Array<{ src: string; handle: string }>> = [];
    for (let i = 0; i < postImage.length; i += 4) {
        groupedImages.push(postImage.slice(i, i + 4));
    }

</script>

<div class="grid grid-cols-3 gap-4 py-24 px-16">
    {#each groupedImages as group}
    <div class="grid gap-4">
        {#each group as image}
        <div class="max-h-800 overflow-hidden">
            <img class="w-full h-auto rounded-lg" src={image.src} alt={image.handle}>
        </div>
        {/each}
    </div>
    {/each}
</div>
