# Asset Pipeline Plan

## Starter packs (Phase 2 target)
1. **Arcade Core** – 32x32 sprite sheet (player, enemies, pickups), UI buttons, 5 SFX loops.
2. **Fantasy Tiles** – 16x16 tileset + props, foliage, particle sprites.
3. **UI Kit** – HUD frames, buttons, dialog panels in light/dark variants.
4. **Audio loops** – Chill, action, puzzle background tracks + event stingers.

## Directory structure
```
assets/
  arcade-core/
    sprites/
    audio/
    license.md
  fantasy-tiles/
  ui-kit/
```

## Sourcing
- Prefer CC0 / original art. Track attribution in `license.md` inside each pack.
- Accept community submissions via PR + template (coming soon).

## Import UX
- Drag & drop into editor, auto-upload to user workspace (Foldr integration).
- CLI/CI option: `pnpm assets add <pack>` to fetch latest version.

## Future marketplace
- Remix-friendly licensing.
- Donation split: 80% creator / 20% project ops.
