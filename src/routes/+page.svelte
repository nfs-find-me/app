<script lang="ts">
	import NavBar from '../components/navBar.svelte';
	import Footer from '../components/footerComponent.svelte';
	import HomeComponent from '../components/homeComponent.svelte';
	import ClassementComponent from '../components/classementComponent.svelte';

	import { currentPage } from "../store/pathStore";

	let isLogged = true;
</script>

<NavBar {isLogged} />

{#if $currentPage == 'home' || $currentPage == 'explore'}
	<HomeComponent {isLogged} />
{:else if $currentPage == 'classement'} 
	<ClassementComponent {isLogged}></ClassementComponent>
{:else}
	<p>No true Condition is true</p>
{/if}

<Footer {isLogged} />
