<script>
	import { enhance } from '$app/forms';
	import Button from '../../components/button.svelte';
	import Input from '../../components/input.svelte';
	import LogoTitle from '../../components/logoTitle.svelte';
	import NavBar from '../../components/navBar.svelte';
	import { ButtonTypeEnum } from '../../enum/ButtonType.enum';
	import { InputTypeEnum } from '../../enum/InputType.enum';
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

		<Button type={ButtonTypeEnum.SUBMIT} fill={true} text={'Se connecter'} />
	</form>
</section>
