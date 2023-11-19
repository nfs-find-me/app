<script lang="ts">
	// TEMPS

	//

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
	const subscribe = isLoggedStore.subscribe((v) => (isLogged = v));
	const subscribeLoggingOut = isLoggingOutStore.subscribe((v) => (isLoggingOut = v));

	$: isLoggingOut, logoutServer();

	//do something here

	export let data: LayoutData;
	connected(data.sendIsLoggedToFront);

	async function logoutServer() {
		if (canLogout()) {
			connected(false);
			isLoggingOutReset();
			goto('/logout');
		}
	}

	const canLogout = () => {
		return isLogged && browser && isLoggingOut;
	};
</script>

<NavBar {isLogged} />

<slot />
<p>Connexion : {isLogged}</p>
<FooterComponent {isLogged} />
