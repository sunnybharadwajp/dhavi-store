<script>
    import { onMount } from 'svelte';
    import { updateStep } from "$lib/stores.js";
    import { goto } from '$app/navigation';

    onMount(() => {
        updateStep(stepId);
    });

    let stepId = 1;

    import DesignViewer from './DesignViewer.svelte';
    import Navigator from './Navigator.svelte';
    import { createDummyData } from "$lib/helpers.js";

    let showedItems = [];
    let selectedItem = {};
    let viewerPanel;
    showedItems = createDummyData(14);

    function showSelectedItem(designObj) {
        selectedItem = designObj;
        viewerPanel.classList.remove("hidden");
    }

    function closeCurrentModal() {
        selectedItem = {};
        viewerPanel.classList.add("hidden");
    }

    function designSelected(data) {
        console.log("design Selected");
        //retrieve design data
        //update orderState
        //redirect to next step
        goto('/store/bridge');

    }
</script>

<div class="design-selection">
    <div class="container">

        <Navigator />
        <div class="browser">
            <div class="design-showcase">
                {#each showedItems as item}
                    <div class="card" on:click={() => showSelectedItem(item)}>
                        <div class="image">
                            <img src="{item.image_url}" alt="">
                        </div>
                        <span class="title">
                            {item.title}
                        </span>

                        <div class="price">
                            Rs. {item.price}
                        </div>
                    </div>

                {/each}
            </div>

        </div>
    </div>
</div>
<div bind:this={viewerPanel} class="viewer hidden">
    <DesignViewer item="{selectedItem}" on:closeModal={closeCurrentModal} on:selectDesign={designSelected}/>
</div>

<style>
    .design-selection .container {
        height: 100vh;
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr 3fr;
    }

    .design-showcase {
        padding: 0.6rem 0.6rem 5rem 0.6rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 0.2rem;
        max-height: 100vh;
        overflow-y: scroll;
    }

    .card {
        padding: 0.6rem;
        margin-bottom: 0.2rem;
        border-radius: 0.1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: all 200ms ease-in-out;
    }

    .card:hover {
        background: #f3f3f3;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    .card .image {
        margin-bottom: 0.5rem;
    }

    .card .title {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 0.3rem;
    }
</style>