<script>
    import "../app.css";
    import { orderState } from "$lib/stores.js";

    $: _orderState = $orderState;
</script>

<h1>Current Step: {_orderState.currentStep}</h1>
<slot />