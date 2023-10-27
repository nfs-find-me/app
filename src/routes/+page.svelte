<script lang="ts">
	import NavBar from '../components/navBar.svelte';
	import Footer from '../components/footerComponent.svelte';
	import HomeComponent from '../components/homeComponent.svelte';
	import ClassementComponent from '../components/classementComponent.svelte';
	import SettingComponent from '../components/settingComponent.svelte';
	import ProfileComponent from '../components/profileComponent.svelte';

	import {currentImage, currentPage} from "../store/pathStore";

	let isLogged = true;
</script>

<NavBar {isLogged} />

{#if $currentPage == 'home' || $currentPage == 'explore'}
	<HomeComponent {isLogged} />
{:else if $currentPage == 'classement'} 
	<ClassementComponent {isLogged}></ClassementComponent>
{:else if $currentPage == 'setting'}
	<SettingComponent {isLogged}></SettingComponent>
{:else if $currentPage == 'profile'}
	<ProfileComponent></ProfileComponent>
{:else if $currentPage == 'picture' && $currentImage}
	<PostComponent {isLogged}></PostComponent>
{:else}
	<p>No true Condition is true</p>
{/if}

<Footer {isLogged} />
