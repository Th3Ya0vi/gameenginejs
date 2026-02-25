# gameengine.js

> Cursor for gaming: a chat-driven, open-source engine that ships playable games from natural language prompts.

## Why
- **Build from vibes** – describe mechanics, art direction, or level ideas in chat and watch the engine assemble them.
- **2D-first, 3D-ready** – lightweight 2D renderer today, modular pipeline ready for WebGPU + glTF.
- **Every platform** – export to web, desktop, and mobile from a single project graph.
- **Batteries included** – starter asset packs, templates, and an upcoming community marketplace.
- **Open + donation driven** – MIT licensed, easy to self-host anywhere.

## Monorepo layout
```
.
├── apps/
│   └── editor/        # Chat IDE + live preview (React + Vite placeholder for now)
├── packages/
│   ├── runtime/       # TypeScript ECS/runtime core
│   └── ai/            # AI orchestrator service stub (OpenAI + Claude)
├── docs/
│   ├── product-brief.md
│   └── architecture-outline.md
└── roadmap/
    └── status.md      # Progress checkpoints (coming soon)
```

## Scripts
| Command | Description |
| --- | --- |
| `pnpm install` | Install workspace dependencies |
| `pnpm dev` | Run the editor dev server (placeholder for now) |
| `pnpm lint` | Run shared linting once ESLint config lands |
| `pnpm format` | Apply Prettier formatting |

> **Note:** until the apps/packages are implemented, the scripts act as placeholders so the workflow is ready.

## Roadmap (snapshot)
1. **Phase 0** – brand kit, repo scaffolding, prompt library, starter assets.
2. **Phase 1** – chat IDE + 2D runtime + web export.
3. **Phase 2** – desktop/mobile packaging, asset packs, donation hooks.
4. **Phase 3** – sharing, real-time collab, plugin SDK, 3D groundwork.

See [`docs/product-brief.md`](docs/product-brief.md) and [`docs/architecture-outline.md`](docs/architecture-outline.md) for full context.
