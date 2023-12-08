<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const userList = data.user.users;
	const userId = data.userId;
	const userRank = extractIds(userList).indexOf(userId);

	function extractIds(objects: any) {
		return objects.map((obj: any) => obj.id);
	}
</script>

<h3 class="w-11/12 my-10 mx-auto text-center text-xxl laptop:w-4/12">
	Vous êtes n°{userRank} au classement général
</h3>

<!-- <ClassementComponent {isLogged} /> -->
<section
	class="mx-auto w-4/5 border-solid border-blue border-2 rounded-15 my-12 overflow-y-scroll max-h-96"
>
	{#each userList as user, index (index)}
		<div
			id="userScore"
			class="flex flex-row justify-between items-center border-blue border-b-2 w-full p-8"
		>
			<div class="flex flex-row justify-between items-center gap-6 laptop:gap-8">
				{#if index <= 2}
					<i
						class="fa-solid fa-trophy text-xl laptop:text-40 {index === 0
							? 'text-golden-yellow'
							: index === 1
							? 'text-stategray'
							: index === 2
							? 'text-bronze'
							: ''}"
					/>
				{:else}
					<span class="text-xl laptop:text-40 font-bold text-black">{index + 1}</span>
				{/if}
				{#if user.avatar}
					<img
						class="w-12 h-12 laptop:h-16 laptop:w-16 rounded-50 hover:cursor-pointer"
						src={user.avatar}
						alt="image de profil"
					/>
				{:else}
					<img
						class="w-12 h-12 laptop:h-16 laptop:w-16 rounded-50 hover:cursor-pointer"
						src="/user_default.webp"
						alt="image de profil"
					/>
				{/if}
				<p class="text-xl font-bold">{user.username}</p>
			</div>
			<div class="flex flex-row justify-between">
				<p class="text-xl font-bold">{user.score} points</p>
			</div>
		</div>
	{/each}
</section>
