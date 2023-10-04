<script lang="ts">
	import NavBar from "../components/navBar.svelte";
	import Footer from "../components/footerComponent.svelte";
	import HomeComponent from "../components/homeComponent.svelte";
</script>

<NavBar isLogged={false}></NavBar>

<HomeComponent isLogged={true}></HomeComponent>

<Footer isLogged={false}></Footer>