<script lang=ts>
    import { Link, Route, Router } from "svelte-navigator";

</script>

<section>
    <article class="rounded_section">
        <slot></slot>
    </article>
</section>

<style>
    .rounded_section {
        border-radius: 12px;
    }
</style>