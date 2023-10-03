<script lang="ts">
	import VisitorHomeComponent from "./visitorHomeComponent.svelte";
    export let isLogged:Boolean;

    let welcomeImages: Array<{ src: string; handle: string }> = [
        { src: 'image_2.jpg', handle: 'image_2' },
        { src: 'image_5.jpg', handle: 'image_5' },
        { src: 'image_6.webp', handle: 'image_6' },
        { src: 'image_8.webp', handle: 'image_8' },
        { src: 'image_9.webp', handle: 'image_9' },
  ];
</script>


{#if isLogged}
    <!-- TODO SI USER CONNECTE -->
{:else}
    <VisitorHomeComponent welcomeImages={welcomeImages}></VisitorHomeComponent>
{/if}

