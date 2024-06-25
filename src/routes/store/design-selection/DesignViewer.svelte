<script>
    import { createEventDispatcher } from 'svelte';
    export let item;
    const dispatch = createEventDispatcher();

    function closeModal() {
        dispatch('closeModal');
    }

    function selectDesign() {
        dispatch('selectDesign', {
            itemID: "001"
        });
    }
</script>

<div class="design-viewer" on:click={closeModal}>
    <div class="wrapper" on:click|stopPropagation>
        <div class="grid-container">
            <div class="design-images">
                <div class="image-viewer">
                    <img src="{item.image_url}" alt="">
                </div>
                <div class="images-list">

                </div>
            </div>
            <div class="design-info">
                <button on:click={closeModal}>Close</button>
                <button on:click={selectDesign}>Select</button>
                <div class="title">
                    {item.title}
                </div>
                <div class="description">

                </div>
                <div class="cost">
                    Rs. {item.price}
                </div>
                <div class="base-compatibility">
                    <div class="goes-well-with">

                    </div>
                    <div class="base-material">

                    </div>
                    <div class="base-color">

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>


<style>
    .design-viewer {
        position: absolute;
        background: rgba(25, 25, 25, 0.8);
        left: 0;
        top: 0;
        z-index: 1000;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    .design-viewer .wrapper {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1200px;
        background: white;
        border-radius: 5px;
    }

    .grid-container {
        display: grid;
        grid-template-columns: 5fr 2fr;
        padding: 2rem;
    }
</style>