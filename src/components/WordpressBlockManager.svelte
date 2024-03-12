<script lang="ts">



    import type { cmsPage } from "../helper/WordpressBlocks";

    export let pageData: cmsPage;

    let blocksData = pageData.editorBlocks;

</script>

{#each blocksData as block}
    {#if block["__typename"] === "AcfHeader"}
        <!-- <Header blockData={block} /> -->
    <!-- {:else if element["element-type"] === "centertext"}
        <CenterText content={element["content"]} /> -->

    {/if}
{/each}
 