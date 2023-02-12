<script lang="ts">
    import PublicLayout from "./layouts/PublicLayout.svelte";

    function stuff() {
        alert("Go to the about page, before I tell Doc Oc")
    }
</script>

<PublicLayout>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img on:click={stuff} class="clickable" src="https://i.kym-cdn.com/entries/icons/original/000/012/781/upload.png" alt="spooderman">
    <p>
        This is Spooderman, he's going to tell you what to do. Click him and find out what he wants...
    </p>
</PublicLayout>

<style>
    .clickable {
        cursor: pointer;
    }
</style>