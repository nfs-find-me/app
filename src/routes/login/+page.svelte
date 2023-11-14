<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/common/button.svelte';
	import Input from '$lib/components/common/input.svelte';
	import LogoTitle from '$lib/components/common/logoTitle.svelte';
	import NavBar from '$lib/components/common/navBar.svelte';
	import { ButtonTypeEnum } from '../../enum/ButtonType.enum';
	import { InputTypeEnum } from '../../enum/InputType.enum';
	import type { PageData } from './$types';
	import { useForm, Hint, validators, minLength } from 'svelte-use-form';
	import { connected, isLoggedStore } from '../../store/isLogged';
	import type { Subscriber } from 'svelte/motion';
	import { onDestroy } from 'svelte';

	export let data: PageData;
	console.log({ data });
	connected(data.sendIsLoggedToFront);
	let isLogged;
	const subscribe = isLoggedStore.subscribe((v) => (isLogged = v));

	if (isLogged) {
		console.log('redirection :');
	}
	onDestroy(subscribe);
	const form = useForm();
</script>

<NavBar isLogged={false} />

<section
	class="container mx-auto bg-center flex flex-col justify-center items-center h-screen max-h-[80vh]"
>
	<LogoTitle title="connexion" />

	<form
		class="flex flex-col items-center justify-center px-5 max-w-[450px]"
		method="POST"
		use:enhance
		use:form
	>
		<Input
			label={"Nom d'utilisateur ou email"}
			type={InputTypeEnum.TEXT}
			id={'usernameEmail'}
			name={'usernameEmail'}
		/>

		<Input label={'Mot de passe'} type={InputTypeEnum.PASSWORD} id={'password'} name={'password'} />

		<p class="text-sm m-8 text-start">
			Pas de compte ? <a class="action" href="/register">Cliquez ici pour vous inscrire</a>
		</p>

		<Button type={ButtonTypeEnum.SUBMIT} text={'Se connecter'} />
	</form>
	{#if data.isValidForm}
		<div
			class="bg-red-light border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 m-4 shadow-md"
			role="alert"
		>
			<div class="flex">
				<div class="py-1">
					<svg
						class="fill-current h-6 w-6 text-teal-500 mr-4"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						><path
							d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
						/></svg
					>
				</div>
				<div>
					<p class="font-bold">Identifiant invalides !</p>
					<p class="text-sm">Veuillez rentrer des identifiants valident pour vous connecter</p>
				</div>
			</div>
		</div>
	{/if}
</section>
