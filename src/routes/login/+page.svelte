<script>
	import Button from '../../components/button.svelte';
	import Input from '../../components/input.svelte';
	import LogoTitle from '../../components/logoTitle.svelte';
	import NavBar from '../../components/navBar.svelte';
</script>

<NavBar isLogged={true} />

<section
	class="container mx-auto bg-center flex flex-col justify-center items-center h-screen max-h-[80vh]"
>
	<LogoTitle title="connexion" />

	<form class="flex flex-col items-center justify-center">
		<Input
			config={{
				type: 'text',
				id: 'email',
				name: 'email',
				label: "Email ou nom d'utilisateur",
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

		<p class="text-sm m-8 text-start">
			Pas de compte ? <a href="/register">Cliquez ici pour vous inscrire</a>
		</p>

		<Button fill={true} text={'Se connecter'} />
	</form>
</section>

<style>
	.wrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	input {
		border-radius: 0;
		border-bottom: 1px solid black;
	}
</style>
