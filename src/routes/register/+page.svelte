<script>
	import Button from '../../components/button.svelte';
	import Input from '../../components/input.svelte';
	import LogoTitle from '../../components/logoTitle.svelte';
	import NavBar from '../../components/navBar.svelte';
</script>

<NavBar isLogged={false} />

<section
	class="container mx-auto bg-center flex flex-col justify-center items-center h-screen max-h-[80vh]"
>
	<LogoTitle title="inscription" />

	<form class="flex flex-col items-center justify-center">
		<Input
			config={{
				type: 'email',
				id: 'email',
				name: 'email',
				label: 'Email',
				text: ''
			}}
		/>

		<Input
			config={{
				type: 'text',
				id: 'username',
				name: 'username',
				label: "Nom d'utilisateur",
				text: ''
			}}
		/>

		<Input
			config={{
				type: 'password',
				id: 'password',
				name: 'password',
				label: 'Mot de passe',
				text: ''
			}}
		/>

		<Input
			config={{
				type: 'password',
				id: 'password_confirm',
				name: 'password_confirm',
				label: 'Confirmation du mot de passe',
				text: ''
			}}
		/>

		<p class="text-sm m-8 text-start">
			Déjà un compte ? <a class="text-blue underline cursor-pointer" href="/login"
				>Cliquez-ici pour vous connecter</a
			>
		</p>

		<Button fill={true} text={"S' inscrire"} />
	</form>
</section>
