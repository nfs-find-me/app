<script lang="ts">
	import '../style/button.css';
	import '../style/input.css';
	import '../style/animation.css';
	import { connected } from '../store/isLogged';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	connected(data.sendIsLoggedToFront);
</script>

<slot />
