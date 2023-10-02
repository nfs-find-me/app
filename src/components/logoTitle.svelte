<script lang="ts">
	export let title: string;
</script>

<div>
	<img width="100px" src="favicon.svg" alt="logo" />
	<h1 class="text-xxl text-blue capitalize font-bold">{title}</h1>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 2rem;
	}
</style>
