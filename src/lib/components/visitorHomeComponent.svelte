<script lang="ts">
	import Button from './common/button.svelte';
	import type { PostType } from '../../store/types';

	let welcomeImagesDisplay = [
		{path: "/image_1.webp", index: 1},
		{path: "/image_2.jpg", index: 2},
		{path: "/image_3.jpg", index: 3},
		{path: "/image_4.webp", index: 4},
	]
	let scrollY: number;
</script>

<svelte:window bind:scrollY />

<!-- Welcome Page -->

<section class="flex flex-col h-90 tablet-max:h-screen items-center gap-14 py-10">
	<h1 class="font-normal text-center text-50 py-4 desktop-max:text-40">
		Devinez l'emplacement, gagnez des points !
	</h1>

	<div class="flex flex-row w-9/12 justify-between py-6 desktop-xl-max:overflow-x-scroll">
		{#each welcomeImagesDisplay as image, index}
			<img
				class="w-233 h-326 desktop-xl-max:w-full desktop-xl-max:h-full desktop-xl:rounded-15
            {index % 2 === 0 ? 'slide-in-bottom-before' : 'slide-in-bottom-after desktop-xl:mt-20'}"
				src={image.path}
				alt="Images de présentation"
			/>
		{/each}
	</div>

	<div class="tablet-max:hidden">
		<a href="#registerSection"
			><i class="fa-solid fa-circle-arrow-down animate-bounce text-50 text-blue" /></a
		>
	</div>
</section>

<!-- REGISTER SECTION -->

<section
	id="registerSection"
	class="flex flex-row desktop-max:flex-col desktop-max:gap-10 h-screen w-full bg-green justify-center items-center"
>
	<div
		class="tablet-max:hidden {scrollY >= 500
			? 'w-1/3 relative slide-in-left'
			: 'w-1/3 relative invisible'}"
	>
		<img class="absolute bottom-24 w-233 h-326 rounded-15" src="image_2.jpg" alt="image" />
		<img class="relative left-32 w-233 h-326 rounded-15" src="image_5.jpg" alt="image" />
	</div>

	<div class="flex flex-col gap-8 items-center w-1/3 desktop-max:w-11/12">
		<h3 class="text-40 font-semibold text-center text-text-contrast">
			Explorez le monde depuis chez vous
		</h3>
		<p class="text-xl font-normal text-center text-text-contrast">
			Inscrivez-vous, ajouter vos amis et defiez les pour découvrir le monde !
		</p>
		<Button link={'register'} color={'night-blue'} fill={true} text={"S'inscrire"} />
	</div>
</section>

<!-- ABOUT SECTION -->

<section
	id="aboutSection"
	class="flex flex-row desktop-max:flex-col desktop-max:gap-10 desktop-max:py-32 h-screen w-full bg-yellow justify-center items-center"
>
	<div class="flex flex-col gap-8 items-center w-1/3 desktop-max:w-11/12">
		<h3 class="text-40 font-semibold text-center text-alert">A propos de FindMe</h3>
		<p class="text-xl font-normal text-center text-alert">
			Que vous soyez un globe-trotter chevronné ou un amateur de jeux en ligne, FindMe offre une
			expérience immersive qui vous permet de tester vos compétences géographiques tout en vous
			amusant avec vos amis.
		</p>
		<Button color={'red'} fill={true} text={'A propos'} />
	</div>

	<div
		class="tablet-max:hidden flex items-center justify-end desktop-max:justify-center {scrollY >=
		1500
			? 'w-1/3 slide-in-right'
			: 'w-1/3 invisible'}"
	>
		<img class="w-4/6 rounded-15" src="globe.png" alt="image globe" />
	</div>
</section>
