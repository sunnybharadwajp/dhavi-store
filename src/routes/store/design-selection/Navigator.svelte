<script>
import {Shirt} from "lucide-svelte";
</script>

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


<style>


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
</style>