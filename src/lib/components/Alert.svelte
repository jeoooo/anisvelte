<script lang="ts">
    import { IconX, IconSkull } from "@tabler/icons-svelte";

    let visible: boolean = true;
</script>

{#if visible}
    <aside class="alert variant-ghost m-6 w-2/5">
        <!-- Icon -->
        <div><IconSkull /></div>
        <!-- Message -->
        <div class="alert-message">
            <h3 class="h3">Alert!</h3>
            <p>This is a sample alert using SkeletonUI and Svelte</p>
        </div>
        <!-- Actions -->
        <div class="alert-actions">
            <button type="button" class="btn variant-filled">Button</button>
            <button type="button" class="btn-icon variant-filled">
                <IconX />
            </button>
        </div>
    </aside>
{/if}
