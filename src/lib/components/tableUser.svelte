<script lang="ts">
	import type { User } from '../../model/user/User';

	export let users: User[];
</script>

<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
	<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
		<tr>
			<th scope="col" class="p-4">
				<div class="flex items-center">
					<input
						id="checkbox-all-search"
						type="checkbox"
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
					<label for="checkbox-all-search" class="sr-only">checkbox</label>
				</div>
			</th>
			<th scope="col" class="px-6 py-3"> Name </th>
			<th scope="col" class="px-6 py-3"> Email </th>
			<th scope="col" class="px-6 py-3"> Avatar </th>
			<th scope="col" class="px-6 py-3"> Followers </th>
			<th scope="col" class="px-6 py-3"> Following </th>
			<th scope="col" class="px-6 py-3"> Roles </th>
			<th scope="col" class="px-6 py-3"> Score </th>
			<th scope="col" class="px-6 py-3"> Action </th>
		</tr>
	</thead>
	<tbody>
		{#each users as user}
			<tr
				class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
			>
				<td class="w-4 p-4">
					<div class="flex items-center">
						<input
							id="checkbox-table-search-1"
							type="checkbox"
							class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
						<label for="checkbox-table-search-1" class="sr-only">checkbox</label>
					</div>
				</td>
				<td class="px-6 py-4"> {user.username} </td>
				<td class="px-6 py-4"> {user.email} </td>
				<td class="px-6 py-4"> {user.avatar} </td>
				<td class="px-6 py-4"> {user.followers.length} </td>
				<td class="px-6 py-4"> {user.following.length} </td>
				<td class="px-6 py-4"> {user.roles} </td>
				<td class="px-6 py-4"> {user.score} </td>
				<td class="flex items-center px-6 py-4">
					<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
					<a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
						>Remove</a
					>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
