<script lang="ts">
    import { MapLibre, Marker } from 'svelte-maplibre';
    import type { LngLatLike, LngLatBoundsLike } from 'svelte-maplibre';
    import Input from '$lib/components/common/input.svelte';
    import { InputTypeEnum } from '../../enum/InputType.enum';

    let markerCoords: LngLatLike = { lng: 2.3502761752520267, lat: 48.856836256240854 };
    let selectedFile: { file: File; imageUrl: string } | null = null;
    let geoUrl = "https://api-adresse.data.gouv.fr/reverse/";
    let addressValue = "";
    let cityValue = "";
    let zipValue = "";
    let timer;

    let franceBounds: LngLatBoundsLike = [
    [-6.352731824594258, 42.53157074703472], // Coin inférieur gauche de la France
    [12.1532244672579, 51.38478063560865], // Coin supérieur droit de la France
    ];
    

    const handleFileChange = (event: any) => {
        const file: File = event.target.files[0];

        if (file) {
            const imageUrl: string = URL.createObjectURL(file);
            selectedFile = { file, imageUrl };
        }
    };


    const debounce = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            const url = `${geoUrl}?lat=${markerCoords.lat}&lon=${markerCoords.lng}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {

                    if(data.features[0].properties){
                        addressValue = data.features[0].properties.label;
                        cityValue = data.features[0].properties.city;
                        zipValue = data.features[0].properties.postcode;
                    }
                })
                .catch(error => console.error("Erreur lors de l'appel à l'API:", error));
        }, 1000);
    };


</script>

<div class="mx-auto flex flex-col items-center justify-center gap-5 p-8">
    <h2 class="text-lg text-blue font-bold">Ajouter un contenu</h2>

    <div class="mx-auto flex flex-row items-center justify-center gap-5 border-solid p-4">
        {#if selectedFile}
        <div class="text-center">
            <img src={selectedFile.imageUrl} alt="Image Preview" class="rounded-lg w-40 h-24 border-2 border-sky-500" />
        </div>
        {/if}
        <input type="file" id="fileInput" on:change={handleFileChange} />
    </div>

    <div class="w-2/4 h-96 m-6 flex flex-row border-4 border-sky-500 rounded-lg">
        <MapLibre
            center={markerCoords}
            zoom={4}
            class="w-full h-full z-10 rounded-sm"
            standardControls
            style={'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL'}
            maxBounds={franceBounds}
            >

            <Marker
                lngLat={markerCoords}
                draggable
                on:drag={(e) => {
                    markerCoords = { lng: e.detail.lngLat[0], lat: e.detail.lngLat[1] };
                    debounce();
                }}
                class="w-10 h-10 transition-all bg-red-300 text-black rounded-full grid place-items-center"
            >
                <img src="../favicon.svg" class="h-10" alt="marker" />
            </Marker>
        </MapLibre>


        <div class="w-80 p-2">
            <Input label={'Adresse'} type={InputTypeEnum.TEXT} id={'adress'} name={'adress'} bind:value={addressValue} />
            <Input label={'Ville'} type={InputTypeEnum.TEXT} id={'country'} name={'country'} bind:value={cityValue} />
            <Input label={'Code postal'} type={InputTypeEnum.TEXT} id={'zipcode'} name={'zipcode'} bind:value={zipValue} />
            <Input label={'X, Y'} type={InputTypeEnum.TEXT} id={'geoloc'} name={'geoloc'} value={`X: ${markerCoords.lng}, Y: ${markerCoords.lat}`} />
        </div>
    </div>
</div>
