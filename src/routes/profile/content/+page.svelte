<script lang="ts">
	import type { Post } from '../../../model/post/Post';
    import type { PageData } from './$types';
    
    export let data: PageData;
    const postDatas = data.post.posts as Post[];

    console.log(data)

</script>

<section class="flex flex-wrap justify-between mx-auto gap-4 w-full p-10">
    {#each postDatas as post}
    <a href="{'/post/' + post.id}" class="w-full md:w-1/5 cursor-pointer transition duration-300 ease-in-out hover:scale-110">
        <img src="{post.picture?.url}" alt="Contenu utilisateur" >
    </a>
    {/each}
</section>  