<script lang="ts">
	import VisitorHomeComponent from "./visitorHomeComponent.svelte";
	import UserHomeComponent from "./userHomeComponent.svelte";
    export let isLogged:Boolean;

    const welcomeImages: Array<{ src: string; handle: string }> = [
        { src: 'image_2.jpg', handle: 'image_2' },
        { src: 'image_5.jpg', handle: 'image_5' },
        { src: 'image_6.webp', handle: 'image_6' },
        { src: 'image_8.webp', handle: 'image_8' },
        { src: 'image_9.webp', handle: 'image_9' },
    ];

    let postImage: Array<{ src: string; handle: string }> = [
        { src: 'image_5.jpg', handle: 'image_5' },
        { src: 'image_2.jpg', handle: 'image_2' },
        { src: 'image_6.webp', handle: 'image_6' },
        { src: 'image_8.webp', handle: 'image_8' },
        { src: 'image_9.webp', handle: 'image_9' },
        { src: 'image_1.webp', handle: 'image_1' },
        { src: 'image_3.jpg', handle: 'image_3' },
        { src: 'image_4.webp', handle: 'image_4' },
        { src: 'image_11.jpg', handle: 'image_11' },
        { src: 'image_13.jpg', handle: 'image_13' },
        { src: 'image_12.jpg', handle: 'image_12' },
        { src: 'image_14.jpg', handle: 'image_14' },
        { src: 'image_15.jpg', handle: 'image_15' },
        { src: 'image_16.jpg', handle: 'image_16' },
        { src: 'image_17.jpg', handle: 'image_17' },
        { src: 'image_18.jpg', handle: 'image_18' },
        { src: 'image_19.jpg', handle: 'image_19' },
    ];

</script>


{#if isLogged}
    <UserHomeComponent postImage={postImage}></UserHomeComponent>
{:else}
    <VisitorHomeComponent welcomeImages={welcomeImages}></VisitorHomeComponent>
{/if}

