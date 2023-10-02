<script>
	export let text = 'TEXT BUTTON A MODIFIER';
	export let fill = true;
	export let link = '#';
</script>

<button class="btn" class:btn-primary={fill} class:btn-secondary={!fill}>
	<a href={'/' + link}>{text}</a>
</button>
