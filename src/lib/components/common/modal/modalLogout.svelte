<script lang="ts">
	import Modal from '../modal.svelte';
	import { isLoggingOut } from '../../../../store/isLoogingOut';
	export let showModal = false;

	function handleIsLogout() {
		isLoggingOut();
	}
</script>

<Modal
	on:confirm={handleIsLogout}
	bind:showModal
	title="Voulez vous déconnecter ?"
	buttonTextConfirm="Me déconnecter"
/>
