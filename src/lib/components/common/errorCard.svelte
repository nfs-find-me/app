<script lang="ts">

export let errorMessage: String;
</script>

<div class="w-4/5 p-5 mx-auto flex items-center mb-4 text-lg text-alert border border-alert rounded-lg bg-white-secondary" role="alert">
    <div>
        <i class="fa-solid fa-triangle-exclamation text-alert my-6"></i>
        <span class="font-medium">{ errorMessage }</span>
    </div>
</div>