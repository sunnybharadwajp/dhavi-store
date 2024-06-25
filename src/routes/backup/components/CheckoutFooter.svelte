<script>
    import { PanelBottomOpen } from 'lucide-svelte';
</script>

<div class="checkout-footer">
    <div class="container">
        <div class="step-links">
            <div class="step step-1 active">
                Select your Design
            </div>
            <div class="step step-2">
                Choose your Base and Material
            </div>
            <div class="step step-3">
                Enter Delivery Information
            </div>
        </div>
        <div class="bill flex">
            <span>Rs.</span><span class="price">7100</span>
            <div class="panel-button-wrapper">
                <PanelBottomOpen size="24" />
            </div>

        </div>
    </div>

</div>

<style>
    .checkout-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: white;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }

    .checkout-footer .container {
        display: flex;
        justify-content: space-between;
        padding: 0 0 0 1rem;
    }

    .step-links {
        display: flex;
        flex-direction: row;
        letter-spacing: -0.034rem;
        color: slategray;
        font-size: 1.25rem;
        opacity: 0.7;
    }

    .step.active {
        font-weight: bold;
        color: black;
        opacity: 1;
    }

    .step {
        margin-right: 1rem;
        padding: 0.9rem;
    }

    .bill {
        font-size: 1.7rem;
        padding: 0.6rem;
        font-weight: bold;
    }

    .panel-button-wrapper {
        padding: 0.43rem;
        margin: 0 0.5rem;
        color: slategray;
        opacity: 0.7;
    }
</style>