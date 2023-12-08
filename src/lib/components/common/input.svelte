<script lang="ts">
	import { InputTypeEnum } from '../../../enum/InputType.enum';

	export let label = '';
	export let name = '';
	export let id = '';
	export let value = '';
	export let type: InputTypeEnum = InputTypeEnum.TEXT;
	export let isRequired = true;
</script>

<div class="relative z-0 w-full mb-6 group">
	<input
		{type}
		{name}
		{id}
		{value}
		class="block py-2.5 px-0 w-full text-sm text-black
		bg-transparent border-0 border-b-2 border-black
		appearance-none
		focus:outline-none focus:ring-0 focus:border-blue peer"
		placeholder=" "
		required={isRequired}
	/>
	<label
		for={name}
		class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400
		duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
		peer-focus:left-0 peer-focus:text-blue
		peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
		peer-focus:scale-75 peer-focus:-translate-y-6">{label}</label
	>
</div>
