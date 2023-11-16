<script lang="ts">
	import { ButtonTypeEnum } from "../../../enum/ButtonType.enum";
	export let text = 'TEXT BUTTON A MODIFIER';
	export let fill = true;
	export let link: string | null = null;
	export let color: string = 'blue';
	export let type: ButtonTypeEnum = ButtonTypeEnum.BUTTON;
</script>

{#if link}
	<a href={'/' + link}>
		<button class={'btn btn-color-' + color} class:btn-fill={fill}>
			{text}
		</button>
	</a>
{:else}
	<button {type} class={'btn btn-color-' + color} class:btn-fill={fill}>
		{text}
	</button>
{/if}
