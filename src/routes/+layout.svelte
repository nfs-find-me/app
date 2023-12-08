<script lang="ts">
	// TEMPS

	import '../app.css';
	import '../style/button.css';
	import '../style/input.css';
	import '../style/animation.css';
	import { connected } from '../store/isLogged';
	import type { LayoutData } from './$types';
	import { isLoggedStore } from '../store/isLogged';
	import NavBar from '$lib/components/common/navBar.svelte';
	import FooterComponent from '$lib/components/footerComponent.svelte';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { isLoggingOutReset, isLoggingOutStore } from '../store/isLoogingOut';

	let isLogged: boolean;
	let isLoggingOut: boolean;
	let userPicture: string;
	import type { User } from '../model/user/User';
	export let data: LayoutData;
	const user: User = data.user;
	$: isLogged, connected(data.sendIsLoggedToFront);
	$: isLoggingOut, logoutServer();

	async function logoutServer() {
		if (canLogout()) {
			connected(false);
			isLoggingOutReset();
			goto('/logout');
		}
	}

	const canLogout = () => {
		// if(isLogged && user.avatar != null){
		// 	userPicture = user.avatar;
		// }else{
		// 	userPicture = "/user_default.webp";
		// }
		return isLogged && browser && isLoggingOut;
	};
</script>

<NavBar {isLogged} {userPicture} />

<slot />
<FooterComponent {isLogged} />
