<script>
	import Button from '../../components/button.svelte';
	import Input from '../../components/input.svelte';
	import LogoTitle from '../../components/logoTitle.svelte';
	import NavBar from '../../components/navBar.svelte';
</script>

<NavBar isLogged={true} />

<section class="wrap">
	<LogoTitle title="connexion" />

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

	<p class="text-sm m-8">Pas de compte ? <a href="/register">Cliquez ici pour vous inscrire</a></p>

	<Button fill={true} text={'Se connecter'} />
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
