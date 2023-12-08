<script lang="ts">
	import ErrorCard from './common/errorCard.svelte';
	import AccountSettingComponent from './accountSettingComponent.svelte';
	import SecuritySettingComponent from './securitySettingComponent.svelte';
	import { User } from '../../model/user/User';
	import Modal from './common/modal.svelte';
	import Button from './common/button.svelte';
	import ModalLogout from './common/modal/modalLogout.svelte';

	let errorMessage = "Vous n'êtes pas autorisé à accéder à ce contenu.";
	let ongletInfo = { id: 1, name: 'Mon compte' };

	export let isLogged: Boolean;
	export let user: User;

	function updateOngletInfo(id: number, name: string) {
		ongletInfo = { id: id, name: name };
	}

	let showModal = false;
</script>

{#if isLogged}
	<div id="ongletBanner" class="mt-10">
		<h2 class="py-8 px-16 text-xxl bg-blue-dark text-white font-bold">{ongletInfo.name}</h2>
	</div>

	<section class="flex flex-col laptop:flex-row">
		<nav
			class="w-full flex flex-col bg-white-secondary border-blue-dark border-b-4 laptop:border-r-4 laptop:w-1/5 justify-between items-center"
		>
			<ul class="py-10 px-4 flex flex-row laptop:flex-col gap-4">
				<li
					on:click={() => updateOngletInfo(1, 'Mon compte')}
					class="p-4 flex flex-col laptop:flex-row gap-4 items-center cursor-pointer"
				>
					<i class="fa-regular fa-user text-xl text-text-contrast font-bold" />
					<span class="text-lg text-text-contrast">Mon compte</span>
				</li>
			</ul>

			<div class="p-2 laptop:p-8 flex flex-col laptop:flex-row gap-4 items-center cursor-pointer">
				<i class="fa-solid fa-arrow-right-from-bracket text-lg text-alert font-bold" />
				<span on:click={() => (showModal = true)} class="text-lg text-alert font-bold"
					>Déconnexion</span
				>
			</div>
		</nav>

		{#if ongletInfo.id === 1}
			<AccountSettingComponent {user} />
		{:else if ongletInfo.id === 2}
			<SecuritySettingComponent />
		{/if}
	</section>
{:else}
	<ErrorCard {errorMessage} />
{/if}

<ModalLogout bind:showModal />
