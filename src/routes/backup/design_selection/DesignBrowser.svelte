<script>
    import { onMount } from 'svelte';
    import { orderState, updateStep } from "$lib/stores.js";

    import DesignViewer from './DesignViewer.svelte';
    import { Shirt } from 'lucide-svelte';

    let _orderState;
    let stepId = 1;
    $: _orderState = $orderState;

    onMount(() => {
        updateStep(stepId);
    })

    let showedItems = [];
    let selectedItem = {};
    let viewerPanel;
    createDummyData();

    function createDummyData(numOfRecords) {
        let counter = 1;
        while (counter <= numOfRecords) {
            showedItems = [...showedItems, {
                title: "Lorem ipsum dolor sit amet, consetetur",
                index: counter,
                image_url: "https://bulma.io/assets/images/placeholders/800x480.png",
                date: new Date(),
                price: Math.round(Math.random() * 10000),
            }];
            counter++;
        }
    }

    function showSelectedItem(designObj) {
        selectedItem = designObj;
        viewerPanel.classList.remove("hidden");
    }

    function closeCurrentModal() {
        selectedItem = {};
        viewerPanel.classList.add("hidden");
    }
</script>

<div class="design-selection">
    <div class="container">
        <div class="navigator">
            <div class="logo-block">

            </div>

            <div class="link-collection base-type-buttons">
                <div class="base-type-btn">
                    <div class="logo"><Shirt size="18"/></div>
                    <div class="label">Any</div>
                </div>
                <div class="base-type-btn">
                    <div class="logo"><Shirt size="18"/></div>
                    <div class="label">Blouse</div>
                </div>
                <div class="base-type-btn">
                    <div class="logo"><Shirt size="18"/></div>
                    <div class="label">Saree</div>
                </div>
                <div class="base-type-btn">
                    <div class="logo"><Shirt size="18"/></div>
                    <div class="label">Dress</div>
                </div>
                <div class="base-type-btn">
                    <div class="logo"><Shirt size="18"/></div>
                    <div class="label">Top</div>
                </div>
                <div class="base-type-btn">
                    <div class="logo"><Shirt size="18"/></div>
                    <div class="label">Frock</div>
                </div>
                <div class="base-type-btn">
                    <div class="logo"><Shirt size="18"/></div>
                    <div class="label">Shirt</div>
                </div>
            </div>

            <div class="link-collection">
                <div class="heading">
                    Categories
                </div>
                <div class="links">
                    <div class="design-filter-link">All Designs</div>
                    <div class="design-filter-link">Tanjore Style</div>
                    <div class="design-filter-link">Spiritual, Devotional</div>
                    <div class="design-filter-link">Flowers</div>
                    <div class="design-filter-link">Abstract Patterns</div>
                </div>
            </div>

            <div class="link-collection">
                <div class="heading">
                    Tags
                </div>
                <div class="links tags">
                    <span class="tag-link">#ganesha</span>
                    <span class="tag-link">#tanjore style</span>
                    <span class="tag-link">#krishna</span>
                    <span class="tag-link">#ammavaru</span>

                </div>
            </div>

        </div>
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
   <DesignViewer item="{selectedItem}" on:closeModal={closeCurrentModal}/>
</div>


<style>
    .design-selection .container {
        height: 100vh;
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr 3fr;
    }

    .navigator {
        background: #e1e1e1;
        padding: 0 1.3rem;
    }

    .logo-block {
        width: 100%;
        height: 3rem;
    }

    .navigator .link-collection {
        margin-bottom: 1rem;
    }

    .base-type-buttons {
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
    }

    .base-type-btn {
        display: flex;
        padding: 0.4rem 0.7rem;
        border: 1px solid slategray;
        margin-right: 0.3rem;
        margin-bottom: 0.3rem;
        border-radius: 5px;
        background: #f4f4f4;
        font-size: 1rem;
    }

    .base-type-btn .logo {
        display: inline-block;
        margin-right: 7px;
        position: relative;
        top: 2px;
    }

    .base-type-btn .label {
        margin-bottom: -0.2rem;
    }

    .link-collection .heading {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 0.2rem;
    }

    .link-collection .links .design-filter-link {
        font-size: 1.2rem;
    }

    .link-collection .links .tag-link {
        padding: 0.4rem 0.6rem;
        background: #dddddd;
        display: inline-block;
        margin-bottom: 0.3rem;
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