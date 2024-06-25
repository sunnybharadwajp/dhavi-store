<script>
    import { onMount } from 'svelte';
    import { updateStep } from "$lib/stores.js";
    onMount(() => {
        updateStep(stepId);
    });

    let stepId = 2;
</script>