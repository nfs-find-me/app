<script lang="ts">
	import NavBar from '../components/navBar.svelte';
	import Footer from '../components/footerComponent.svelte';
	import HomeComponent from '../components/homeComponent.svelte';

	let isLogged = false;
</script>

<NavBar {isLogged} />

<HomeComponent {isLogged} />

<Footer {isLogged} />
