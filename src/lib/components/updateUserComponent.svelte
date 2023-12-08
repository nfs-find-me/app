<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    export let user;
    let previewImage;

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            user.profileImage = file;
            const reader = new FileReader();

            reader.onload = (e) => {
                previewImage = e.target.result;
            };

            reader.readAsDataURL(file);
        }
    };

    const handlePseudoChange = (event) => {
        user.username = event.target.value;
    };

    const handleSubmit = () => {
        // Handle form submission, e.g., send data to the server
        // For example: updateUserProfile(user);
    };
</script>

<div id="ongletBanner" class="mt-2">
    <h2 class="py-8 px-16 text-xxl bg-blue-dark text-white font-bold">Modification utilisateur</h2>
</div>

<main class="w-full flex justify-center my-10">
    <div class="border-blue border-4 rounded-md p-8">
        <form class="mx-auto my-2" on:submit|preventDefault={handleSubmit}>
            <div class="mb-4 flex flex-col gap-4">
                <label for="profileImage" class="block text-sm font-medium text-gray-600">
                    Image de profil
                </label>

                {#if previewImage}
                    <img src={previewImage} alt="Preview" class="max-w-full rounded-50" />
                {:else}
                    <img src={user.avatar} alt="Avatar" class="max-w-full rounded-50" />
                {/if}

                <input
                    type="file"
                    id="profileImage"
                    accept="image/*"
                    class="mt-1 p-2 border rounded-md"
                    on:change={handleFileChange}
                />
            </div>

            <div class="mb-4">
                <label for="pseudo" class="block text-sm font-medium text-gray-600">
                    Pseudo
                </label>
                <input
                    type="text"
                    id="pseudo"
                    bind:value={user.username}
                    class="mt-1 p-2 border rounded-md"
                    on:input={handlePseudoChange}
                />
            </div>

            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md">
                Enregistrer
            </button>
        </form>
    </div>
</main>
