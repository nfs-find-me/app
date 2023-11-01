<script lang="ts">
	import NavBar from '../components/navBar.svelte';
	import Footer from '../components/footerComponent.svelte';
	import HomeComponent from '../components/homeComponent.svelte';
	import { isLogged } from '../store/isLogged';
	let isConnected: boolean;
	const subscribe = isLogged.subscribe((v) => (isConnected = v));
	console.log('fix', { isConnected });
</script>

<NavBar isLogged={isConnected} />

<HomeComponent isLogged={isConnected} />

<Footer isLogged={isConnected} />
