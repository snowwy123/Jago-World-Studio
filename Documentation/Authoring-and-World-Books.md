# World authoring & shareable books

World 0.24.0 development preview

## Find and revisit

Use **Find** or **Ctrl+K** to search the world. The sidebar search also finds named map features and tags. Opening a feature selects it on its map. Linked features offer **Open lore entry**; entries show **On your maps** links back to their locations. Existing recent places, saved searches and Back remain available.

**Appearance** now separates Suite appearances from World desks. These change the interface, not your map artwork.

## Edit geography deliberately

After sculpting a world or regional coastline, use **Refresh terrain analysis…**. Review the proposed land mask before applying. Existing objects stay in place; still-land cells retain their elevation. Undo reverses the refresh. It does not regenerate rivers, climate, routes or settlements. Other geography-dependent features may still need your review.

Full map generation explains what it replaces. Locked objects and groups, plus route endpoints needed by retained authored routes, are kept. A locked edited coastline blocks whole-map regeneration; unlock it deliberately or refresh local details. Select an area and use **Refresh area details…** for a smaller change.

## Export a complete reference

Open **Save & share**. The **World book · HTML** export is a self-contained offline reference with contents, search, images, maps, timeline text, writing and linked lore. Open it in a browser and choose **Print / save PDF** for a printed book. **Choose contents…** lets you limit entries, writing and maps. Review the author/private and canon controls before sharing.

Expand **Embed designed presentations & audio** to include the existing illustrated timeline, family presentation, connection atlas and building floor atlases. Choose their appearance. Selected audio is embedded only when its checkbox and individual tracks are selected; it never autoplays. Audio controls are omitted from print. Imported audio retains its own rights and browser format requirements.

The **reference ZIP** contains the book, structured reference files, selected map exports and assets, plus full-size SVGs of the chosen presentations and selected audio files. Designed timeline pages show up to 150 events; the connection atlas shows up to 120 entries. Full included records remain in the book text. Save a normal **.jagoworld** project as your editable author backup.

## Share a branching draft

Choose **Choice-story reader · HTML**. Included writing becomes a small offline reader with choices, scene navigation, Back, Start over and linked lore. Choose the starting scene in the contents picker. Missing excluded destinations are disabled. Unbranched writing continues in order.

This reader supports explicit document choices, not a full visual-novel runtime: conditions are notes, not evaluated game variables. It has no progress saves, timed typing or scene-specific sound cues. The book is the richer illustrated world reference.

## Development verification

Browser checks in Source/Tests require Playwright with Edge installed. Set WORLD_TEST_OUTPUT for retained evidence. Authoring checks cover locked generation, selected presentations/audio, image decoding and preservation of editing state. Normal app operation requires no test tools or online services.
