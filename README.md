# gameengine.js

> Cursor for gaming: a chat-driven, open-source engine that ships playable games from natural language prompts.

## Why it exists
- **Build from vibes** – describe mechanics, art direction, or levels in chat and watch the engine assemble them.
- **2D-first, 3D-ready** – lightweight renderer today, modular pipeline ready for WebGPU + glTF tomorrow.
- **Ship everywhere** – export web, desktop, and mobile builds from one project graph.
- **Batteries included** – starter asset packs, shared prompt library, community remix hub.
- **Fully open** – MIT licensed, donation-driven, easy to self-host.

## Monorepo layout
```
.
├── apps/
│   └── editor/        # Chat IDE + live preview (React + Vite placeholder)
├── packages/
│   ├── runtime/       # TypeScript ECS/runtime core
│   └── ai/            # AI orchestrator service stub (OpenAI + Claude)
├── docs/
│   ├── product-brief.md
│   ├── architecture-outline.md
│   ├── brand.md
│   ├── prompt-library.md
│   └── asset-pipeline.md
├── roadmap/
│   └── status.md
└── .github/          # Workflows + templates
```

## Scripts
| Command | Description |
| --- | --- |
| `pnpm install` | Install workspace dependencies |
| `pnpm dev` | Run the editor dev server (placeholder UI) |
| `pnpm lint` | ESLint with shared TS/React rules |
| `pnpm format` | Format everything with Prettier |
| `pnpm build` | Run build scripts for all packages (currently placeholders) |

## Contributing
1. `pnpm install`
2. `pnpm dev`
3. Open a PR using the templates provided. See [CONTRIBUTING.md](CONTRIBUTING.md) + [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Roadmap snapshot
1. **Phase 0** – brand kit, OSS hygiene, prompt/asset plans (✅ ongoing).
2. **Phase 1** – chat IDE + 2D runtime + web export.
3. **Phase 2** – desktop/mobile packaging, asset packs, donation hooks.
4. **Phase 3** – sharing, real-time collab, plugin SDK, 3D groundwork.

Dive deeper in the [product brief](docs/product-brief.md) and [architecture outline](docs/architecture-outline.md).
