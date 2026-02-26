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
│   └── editor/        # Chat IDE + live preview (React + Vite)
├── packages/
│   ├── runtime/       # TypeScript ECS/runtime core + scene helpers
│   └── ai/            # Orchestrator stub (OpenAI/Claude wiring soon)
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
| `pnpm dev:ai` | Start the orchestrator stub (http://localhost:8787) |
| `pnpm dev:editor` | Run the chat IDE preview (http://localhost:4321) |
| `pnpm export:web` | Build a static web bundle from the editor |
| `pnpm lint` | ESLint across workspace |
| `pnpm format` | Prettier formatting |

> Tip: run `pnpm dev:ai` and `pnpm dev:editor` side-by-side so the chat panel receives live runtime frames.

## Contributing
1. `pnpm install`
2. `pnpm dev:ai` + `pnpm dev:editor`
3. Use PR templates + follow [CONTRIBUTING.md](CONTRIBUTING.md) & [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Roadmap snapshot
1. **Phase 0** – brand kit, OSS hygiene, prompt/asset plans (✅).
2. **Phase 1** – chat IDE + runtime preview + export (🚧 ongoing).
3. **Phase 2** – desktop/mobile packaging, asset packs, donation hooks.
4. **Phase 3** – sharing, real-time collab, plugin SDK, 3D groundwork.

Dive deeper in the [product brief](docs/product-brief.md) and [architecture outline](docs/architecture-outline.md).
