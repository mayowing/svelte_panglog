<script>
    export let data;
    // console.log(data.posts);
</script>


<h1>할루~ {data.user.name}</h1>


<ul>
{#each data.posts as post}
    <li>
        <a href="{post.id}">{post.title}</a>
    </li>    
{/each}
</ul>

<style>

</style>