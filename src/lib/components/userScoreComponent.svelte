<script lang="ts">
    export let userInfos: Array<{ username: string; src: string; score: number }>;
</script>

<section class="mx-auto w-4/5 border-solid border-blue border-2 rounded-15 my-12 overflow-y-scroll max-h-96">
    {#each userInfos as user, index (index)}
            <div id="userScore" class="flex flex-row justify-between items-center border-blue border-b-2 w-full p-8">
                <div class="flex flex-row justify-between items-center gap-6 laptop:gap-8">
                    {#if index <= 2}
                        <i class="fa-solid fa-trophy text-xl laptop:text-40 {index === 0 ? 'text-golden-yellow' : index === 1 ? 'text-stategray' : index === 2 ? 'text-bronze' : ''}"></i>
                    {:else}
                        <span class="text-xl laptop:text-40 font-bold text-black">{index + 1}</span>
                    {/if}
                    <img class="w-12 h-12 laptop:h-16 laptop:w-16 rounded-50 hover:cursor-pointer" src="{user.src}" alt="image de profil">
                    <p class="text-xl font-bold">{user.username}</p>
                </div>
                <div class="flex flex-row justify-between">
                    <p class="text-xl font-bold">{user.score} points</p>
                </div>
            </div>
    {/each}
</section>