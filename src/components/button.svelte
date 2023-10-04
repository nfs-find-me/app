<script lang="ts">
	import { ButtonTypeEnum } from '../enum/ButtonType.enum';
	export let text = 'TEXT BUTTON A MODIFIER';
	export let fill = true;
	export let link: string | null = null;
	export let type: ButtonTypeEnum = ButtonTypeEnum.BUTTON;
</script>

{#if link}
	<a href={'/' + link}>
		<button class="btn" class:btn-primary={fill} class:btn-secondary={!fill}>
			{text}
		</button>
	</a>
{:else}
	<button {type} class="btn" class:btn-primary={fill} class:btn-secondary={!fill}>
		{text}
	</button>
{/if}
