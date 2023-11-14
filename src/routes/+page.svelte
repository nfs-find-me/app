<script lang="ts">
	import NavBar from '../components/navBar.svelte';
	import Footer from '../components/footerComponent.svelte';
	import HomeComponent from '../components/homeComponent.svelte';
	import { isLoggedStore } from '../store/isLogged';
	let isLogged: boolean;
	const subscribe = isLoggedStore.subscribe((v) => (isLogged = v));
	import ClassementComponent from '../components/classementComponent.svelte';
	import SettingComponent from '../components/settingComponent.svelte';
	import ProfileComponent from '../components/profileComponent.svelte';

	import { currentImage, currentPage } from '../store/pathStore';
	import type { PageData } from './$types';

	export let data: PageData;
	const user = data.user;
	console.log({currentUser : user});

</script>

<NavBar {isLogged} />

{#if $currentPage == 'home' || $currentPage == 'explore'}
	<HomeComponent {isLogged} />
{:else if $currentPage == 'classement'}
	<ClassementComponent {isLogged} />
{:else if $currentPage == 'setting'}
	<SettingComponent {isLogged} />
{:else if $currentPage == 'profile'}
	<ProfileComponent />
{:else}
	<p>No true Condition is true</p>
{/if}

<Footer {isLogged} />
