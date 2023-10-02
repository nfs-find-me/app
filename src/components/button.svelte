<script>
	export let text = 'TEXT BUTTON A MODIFIER';
	export let fill = true;
	export let link = '#';
</script>

<a href={'/' + link}>
	<button class="btn" class:btn-primary={fill} class:btn-secondary={!fill}>
		{text}
	</button>
</a>
