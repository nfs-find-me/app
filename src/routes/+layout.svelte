<script lang="ts">
	import '../style/button.css';
	import '../style/input.css';
	import '../style/animation.css';
	import { connected } from '../store/isLogged';
	import type { LayoutData } from './$types';
	import { isLoggedStore } from '../store/isLogged';
	import NavBar from '$lib/components/common/navBar.svelte';
	import FooterComponent from '$lib/components/footerComponent.svelte';

	let isLogged: boolean;
	const subscribe = isLoggedStore.subscribe((v) => (isLogged = v));

	export let data: LayoutData;
	connected(data.sendIsLoggedToFront);
</script>

<NavBar {isLogged} />

<slot />

<FooterComponent {isLogged} />
