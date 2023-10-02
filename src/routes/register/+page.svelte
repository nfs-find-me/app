<script>
	import Button from '../../components/button.svelte';
	import Input from '../../components/input.svelte';
	import LogoTitle from '../../components/logoTitle.svelte';
	import NavBar from '../../components/navBar.svelte';
	import Modal from '../../components/modal.svelte';
	import Cgu from '../../components/cgu.svelte';

	let showModal = false;
</script>

<NavBar isLogged={false} />

<section
	class="container mx-auto bg-center flex flex-col justify-center items-center h-screen max-h-[80vh]"
>
	<LogoTitle title="inscription" />

	<form class="flex flex-col items-center justify-center px-5 max-w-[450px]">
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

		<div class="flex items-center mb-4">
			<input
				id="default-checkbox"
				type="checkbox"
				value=""
				class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
			/>
			<label
				for="default-checkbox"
				class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 self-start"
				>En continuant, j’accepte les <strong on:click={() => (showModal = true)} class="action"
					>conditions générales d’utilisation</strong
				>
				et je reconnais avoir lu
				<strong on:click={() => (showModal = true)} class="action"
					>la politique de confidentialité
				</strong> de FindMe.</label
			>
		</div>

		<p class="text-sm m-8 text-start">
			Déjà un compte ? <a class="action" href="/login">Cliquez-ici pour vous connecter</a>
		</p>

		<Button fill={true} text={"S' inscrire"} />
	</form>
</section>

<Modal bind:showModal>
	<Cgu />
</Modal>
