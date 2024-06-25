<script>
    import {Heart } from 'lucide-svelte';
    import {BellRing  } from 'lucide-svelte';
    import {ShoppingBasket } from 'lucide-svelte';
    import {UserRound } from 'lucide-svelte';

</script>

<div class="nav-wrapper pl-3">
    <nav>
        <div class="nav-links">
            <span class="cart nav-link "><Heart size="24" /></span>
            <span class="cart nav-link "><BellRing size="24" /></span>
            <span class="cart nav-link"><ShoppingBasket size="24" /></span>
            <span class="cart nav-link "><UserRound size="24" /></span>
        </div>

        <div class="circle-wrapper user-btn hidden">
            S
        </div>

    </nav>
</div>



<style>
    .nav-wrapper {
        display: inline-block;
        position: fixed;
        right: 1rem;
        top: 1rem;
        background: white;
        border-radius:1rem;
        opacity: 0.5;
    }

    nav {
        padding: 0.4rem 0.4rem;
        display: flex;
        justify-content: end;
    }

    .nav-links {
        display: flex;
    }

    .nav-link {
        padding: 0.3rem;
        position: relative;
        top: 1px;
        margin-right: 0.1rem;
        color: #aaaaaa;
    }

    .circle-wrapper {
        display: inline-block;
        width: 2.5rem;
        height: 2.5rem;
        text-align: center;
        font-size: 1.54rem;
        background: #c3fffb;
        border-radius: 50%;
        border: 1px solid #6bf1e9;
        margin-left: 0.4rem;
    }
</style>