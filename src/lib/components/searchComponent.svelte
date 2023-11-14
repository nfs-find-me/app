<script lang="ts">
    import FilterBtn from "./common/filterBtn.svelte";

    const filterBtn: Array<{ text: string }> = [
        { text: 'Plus récents'},
        { text: 'Plus anciens'},
        { text: 'Plus vues'},
        { text: 'Abonnements'},
    ];
</script>

<div class="m-auto w-11/12 tablet:w-1/3 mt-6">
    <form>  
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Rechercher ...</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                <i class="fa-solid fa-magnifying-glass text-xl"></i>
            </div>
            <input type="search" id="default-search" class="block w-full p-4 pl-14 text-md rounded-50 border-2 border-blue" placeholder="Rechercher par utilisateur">
        </div>
    </form>
</div>

<div class="flex justify-center items-center flex-row m-auto py-8 px-8 w-11/12 gap-8 overflow-auto laptop:w-2/3">
    {#each filterBtn as content }
        <FilterBtn text={content.text}></FilterBtn>
    {/each}
</div>