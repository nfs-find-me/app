<script lang="ts">
	import NavBar from '$lib/components/navBar.svelte';
	import Footer from '$lib/components/footerComponent.svelte';
	import HomeComponent from '$lib/components/homeComponent.svelte';
	let isLogged = false;
</script>

<NavBar {isLogged} />

<HomeComponent {isLogged} />

<Footer {isLogged} />
