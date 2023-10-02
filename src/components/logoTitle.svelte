<script lang="ts">
	export let title: string;
</script>

<div>
	<img src="favicon.svg" alt="logo" />
	<h1 class="xl">{title}</h1>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 2rem;
	}
	h1 {
		text-align: center;
		font-size: 4rem;
		color: blue;
	}
</style>
