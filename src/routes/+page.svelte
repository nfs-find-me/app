<script lang="ts">
	import NavBar from "../components/navBar.svelte";
	import Footer from "../components/footerComponent.svelte";
	import WelcomeComponent from "../components/welcomeComponent.svelte";

	let welcomeImages: Array<{ src: string; handle: string }> = [
        { src: 'image_2.jpg', handle: 'image_2' },
        { src: 'image_5.jpg', handle: 'image_5' },
        { src: 'image_6.webp', handle: 'image_6' },
        { src: 'image_8.webp', handle: 'image_8' },
        { src: 'image_9.webp', handle: 'image_9' },
  ];

</script>

<NavBar isLogged={false}></NavBar>

<WelcomeComponent welcomeImages={welcomeImages}></WelcomeComponent>

<Footer isLogged={false}></Footer>