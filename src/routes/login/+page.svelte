<script>
	import { enhance } from '$app/forms';
	import Button from '$lib/components/button.svelte';
	import Input from '$lib/components/input.svelte';
	import LogoTitle from '$lib/components/logoTitle.svelte';
	import NavBar from '$lib/components/navBar.svelte';
	import { ButtonTypeEnum } from '$lib/enum/ButtonType.enum';
	import { InputTypeEnum } from '$lib/enum/InputType.enum';

	import { useForm, Hint, validators, minLength } from 'svelte-use-form';
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
</section>
