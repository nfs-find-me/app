<script lang="ts">
	import Button from './button.svelte';
  	export let isLogged:Boolean;
</script>

<!-- Desktop Nav -->

<nav class="tablet-max:hidden flex justify-between items-center p-4">
	<a href="/" class="flex flex-row gap-2 items-center hover:cursor-pointer">
		<img class="w-20" src="favicon.svg" alt="logo" />
		<h2 class="text-xxl font-bold text-blue">FindMe</h2>
	</a>

	<ul class="flex gap-6 font-bold text-lg">
		<li class="hover:cursor-pointer hover:text-blue">Accueil</li>
		{#if isLogged}
			<li class="hover:cursor-pointer hover:text-blue">Explorer</li>
			<li class="hover:cursor-pointer hover:text-blue">Classement</li>
		{:else}
			<li class="hover:cursor-pointer hover:text-blue">A propos</li>
		{/if}
	</ul>

	<div class="flex gap-6 items-center">
		{#if isLogged}
			<i class="fa-solid fa-gear text-40 hover:cursor-pointer hover:text-blue" />
			<img
				class="w-16 h-16 rounded-50 hover:cursor-pointer"
				src="profil_picture.jpg"
				alt="image de profil"
			/>
		{:else}
			<Button link={'login'} fill={true} text={'Se connecter'} />
			<Button link={'register'} fill={false} text={"S'inscrire"} />
		{/if}
	</div>
</nav>

<!-- Phone Nav -->

<div class="tablet:hidden flex items-center justify-center p-4">
	<a href="/" class="flex flex-row gap-2 items-center hover:cursor-pointer">
		<img class="w-32" src="favicon.svg" alt="logo" />
		<h2 class="text-xxl font-bold text-blue">FindMe</h2>
	</a>
</div>

<nav
	class="tablet:hidden fixed z-50 w-full h-20 max-w-lg -translate-x-1/2 shadow-xl bg-white-secondary rounded-full bottom-4 left-1/2"
>
	<div class="grid h-full max-w-lg grid-cols-5 mx-auto">
		<button class="inline-flex flex-col items-center justify-center px-5 rounded-l-full">
			<i class="fa-solid fa-house text-xxl text-text-contrast" />
		</button>

		<button class="inline-flex flex-col items-center justify-center px-5 rounded-l-full">
			<i class="fa-solid fa-map text-xxl text-text-contrast" />
		</button>

		<button class="inline-flex flex-col items-center justify-center px-5 rounded-l-full">
			<i class="fa-solid fa-circle-plus text-60 text-blue" />
		</button>

		<button class="inline-flex flex-col items-center justify-center px-5 rounded-l-full">
			<i class="fa-solid fa-trophy text-xxl text-text-contrast" />
		</button>

		<button class="inline-flex flex-col items-center justify-center px-5 rounded-l-full">
			<i class="fa-solid fa-gear text-xxl text-text-contrast" />
		</button>
	</div>
</nav>
