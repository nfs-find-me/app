<script lang="ts">
	import Button from './button.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let showModal: boolean = false; // boolean
	export let title: string = '';
	export let content: string = '';
	export let buttonTextConfirm: string = 'valider';
	export let buttonTextCancel: string = 'Annuler';

	function confirm() {
		dispatch('confirm', true);
		dialog.close();
	}

	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="flex flex-col items-center justify-between" on:click|stopPropagation>
		<slot name="header" />
		<h2 class="text-xl">{title}</h2>

		{content}
		<slot />
		<div class="flex space-x-20 pt-20 justify-center content-center">
			<p on:click={() => dialog.close()}>{buttonTextCancel}</p>
			<button class="btn btn-color-blue btn-fill" on:click={() => confirm()}>
				{buttonTextConfirm}
			</button>
		</div>
	</div>
</dialog>

<style>
	.flex {
		height: 100%;
	}
	p {
		cursor: pointer;
	}
	button {
		width: 200px;
	}
	dialog {
		width: 32em;

		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
