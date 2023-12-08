<script lang="ts">
	import { User } from '../../model/user/User';
	import CreateContentComponent from './createContentComponent.svelte';

	let onglet: string = 'content';
	export let user: User;
	const countFollowers = user.followers?.length;
	const countFollowing = user.following?.length;
</script>

<section>
	<div class="w-full flex flex-col justify-center items-center gap-6 my-10">
		<img
			class="w-40 h-40 rounded-full hover:cursor-pointer"
			src={user.avatar}
			alt="image de profil"
		/>

		<div class="flex flex-col items-center">
			<h2 class="font-bold text-xxl">{user.username}</h2>
			<p>{user.email}</p>
			<p>{countFollowers} abonnement - {countFollowing} abonné</p>
			<p class="text-lg font-bold"><span class="text-blue">{user.score}</span> points</p>
		</div>
	</div>

	<div class="w-full flex justify-center items-center">
		<ul class="w-3/12 flex flex-row justify-center text-center">
			<li class="w-full">
				<a href="/profile/content"
					><span class="inline-block w-full p-4 text-lg cursor-pointer">Contenu</span></a
				>
			</li>
			<li class="w-full">
				<a href="/profile/create"
					><span class="inline-block w-full p-4 text-lg cursor-pointer">Créer</span></a
				>
			</li>
		</ul>
	</div>
</section>
