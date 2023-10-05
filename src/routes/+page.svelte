<script lang="ts">
	import NavBar from "../components/navBar.svelte";
	import Footer from "../components/footerComponent.svelte";
	import HomeComponent from "../components/homeComponent.svelte";

	let isLogged = true;
</script>

<NavBar isLogged={isLogged}></NavBar>

<HomeComponent isLogged={isLogged}></HomeComponent>

<Footer isLogged={isLogged}></Footer>