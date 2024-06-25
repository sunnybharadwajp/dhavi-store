<script>
    import { onMount } from 'svelte';
    import { updateStep } from "$lib/stores.js";
    onMount(() => {
        updateStep(stepId);
    });

    let stepId = 0;



</script>


<div class="page-container text-center">
    <h1 class="mb-2">Dhavi Creations</h1>
    <p class="mb-2">Wait time: 1 month (updated every 24 hours)</p>
    <p class="mb-2">Choose a Design -> Choose Item Type -> Delivery Information</p>

    <a class="big-button" href="/store">Begin: Choose your Design</a>
</div>

