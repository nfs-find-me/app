<script lang="ts">
	export let title: string;
</script>

<div class="flex flex-col items-center mb-8">
	<img class="hide-on-small-height" width="100px" src="favicon.svg" alt="logo" />
	<h1 class="text-xxl text-blue capitalize font-bold">{title}</h1>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 2rem;
	}
	@media (max-height: 700px) {
		.hide-on-small-height {
			display: none;
		}
	}
</style>
