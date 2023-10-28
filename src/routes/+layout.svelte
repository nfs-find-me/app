<script lang="ts">
	import '../style/button.css';
	import '../style/input.css';
	import '../style/animation.css';
	import { connected, isLogged } from '../store/isLogged';
	import { currentPage } from '../store/pathStore';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	console.log({ data: data.sendIsLoggedToFront });
	connected(data.sendIsLoggedToFront);
</script>

<slot />

<p>Test connexion : {$isLogged}</p>
<p>Test connexion : {data.sendIsLoggedToFront}</p>

<p>Test connexion : {$currentPage}</p>
