# gameengine.js — Architecture Outline

## 1. Overview
A modular TypeScript-based engine running in the browser (and packaged for desktop/mobile) with an AI-driven authoring layer. Designed 2D-first, with renderer/runtime abstractions to support 3D.

```
User Prompt → AI Orchestrator → Project Graph → Runtime Preview / Exporter
```

## 2. Major Components
1. **AI Orchestrator Layer**
   - Routes tasks to OpenAI (code synthesis, scene layout) or Claude (creative ideation, narrative design).
   - Maintains project context (state machine describing scenes, entities, scripts).
   - Provides diff summaries + explanation back to user.

2. **Project Graph & ECS**
   - Stores entities, components, scenes, assets.
   - Serializable as JSON/TS modules.
   - Supports both AI-generated edits and manual user editing.

3. **Runtime Engine**
   - **Rendering:** WebGL2/WebGPU; start with Pixi-like abstraction but custom to keep open source friendly.
   - **Physics:** Lightweight 2D physics (e.g., planck.js or custom). Hook for future 3D physics like Ammo.js.
   - **Audio:** Web Audio API wrapper.
   - **Input:** Keyboard, mouse, touch, gamepad; unify events.
   - **UI Overlay:** HTML/CSS/Canvas layer for menus, HUDs.

4. **Preview & Editor UI**
   - React/Next.js web app housing chat panel, live canvas, scene tree, timeline.
   - Hot-reload engine preview when project graph changes.
   - Manual editing tools (drag/drop, inspector) for advanced users.

5. **Export Pipeline**
   - **Web:** Bundle runtime + assets into static directory.
   - **Desktop:** Wrap web build using Tauri/Electron (selectable) with packaging scripts.
   - **Mobile:** Capacitor/EAS pipeline generating iOS/Android projects.
   - Export service runs locally or via hosted worker (serverless function) for convenience.

6. **Persistence + Hosting**
   - Local-first (IndexedDB + filesystem export).
   - Cloud sync option using open storage APIs (Foldr Space, S3-compatible, Supabase).
   - Self-host instructions (Docker + Vercel deployment).

7. **Community Layer (Phase 2)**
   - Project sharing: short links with playable embed, version history, fork button.
   - Collaborative editing: CRDT or Firestore-like real-time doc for project graph.
   - Template gallery served from curated repo (Git-based submissions).

## 3. Tech Stack
- **Frontend / Editor:** Next.js + React + Tailwind for UI; Zustand/Redux for state.
- **Runtime:** TypeScript engine with modular rendering (start WebGL2, optional WebGPU). ECS-based architecture.
- **AI Layer:** Node.js service using OpenAI + Claude APIs (routing via LangChain or custom orchestrator). Local inference hooks later.
- **Exporter:** Node-based CLI orchestrating esbuild/Vite bundling; Electron/Tauri + Capacitor wrappers.
- **Persistence:** IndexedDB (local), optional Supabase adapter, Foldr Space integration for asset hosting.
- **Auth (optional):** Magic links or GitHub/Google sign-in for cloud features; anonymous local mode by default.

## 4. Data Model
- `project.json`: metadata, settings, target platforms.
- `scenes[]`: graph of entities, components.
- `assets[]`: references to local files, remote URLs, or prebundled packs.
- `scripts[]`: TypeScript modules compiled to runtime.
- `chatHistory`: stored for context/resume.

## 5. AI Workflow Example
1. User: “Create a neon cyberpunk runner with jump + dash.”
2. AI orchestrator parses request, identifies needed components (player sprite, parallax background, physics, controls).
3. Generates/updates project graph; calls code-gen model for scripts.
4. Pushes diff to runtime; preview updates.
5. AI summarizes changes + next suggestions (“Want to add enemies?”).

## 6. Deployment & Hosting Plan
- **Open source repo** (MIT/Apache). Provide Dockerfile + Vercel/Render instructions.
- **Official demo deployment** maintained by us (accepts donations).
- **CLI installer** for local installs, including exporter dependencies.

## 7. Roadmap Skeleton
- **Phase 0:** Research + spec (complete product brief, architecture, design prototypes).
- **Phase 1:** Build core runtime + chat IDE, enable simple scenes, web export.
- **Phase 2:** Desktop/mobile packaging, asset packs, template gallery, donation hooks.
- **Phase 3:** Collaboration, community sharing, plugin SDK, 3D renderer groundwork.
