<script lang="ts">
	import NavBar from '../components/navBar.svelte';
	import Footer from '../components/footerComponent.svelte';
	import HomeComponent from '../components/homeComponent.svelte';
	import { isLogged } from '../store/isLogged';
	let isConnected: boolean;
	const subscribe = isLogged.subscribe((v) => (isConnected = v));
	import ClassementComponent from '../components/classementComponent.svelte';
	import SettingComponent from '../components/settingComponent.svelte';
	import ProfileComponent from '../components/profileComponent.svelte';

	import { currentImage, currentPage } from '../store/pathStore';
</script>

<NavBar isLogged={isConnected} />

<HomeComponent isLogged={isConnected} />
{#if $currentPage == 'home' || $currentPage == 'explore'}
	<HomeComponent {isConnected} />
{:else if $currentPage == 'classement'}
	<ClassementComponent {isConnected} />
{:else if $currentPage == 'setting'}
	<SettingComponent {isConnected} />
{:else if $currentPage == 'profile'}
	<ProfileComponent />
{:else}
	<p>No true Condition is true</p>
{/if}

<Footer isLogged={isConnected} />
