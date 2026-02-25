# gameengine.js — Product Brief

_Last updated: 2026-02-22_

## 1. Vision
Build “Cursor for gaming”: a chat-driven, open-source game engine that lets anyone ship a playable 2D game to the web in minutes (with 3D support on the roadmap). Users describe what they want, the AI assembles scenes, logic, and assets, and exports to web/desktop/mobile from a single codebase.

## 2. Target Creators
- **Newcomers / hobbyists:** zero-code entry; lean on natural language.
- **Indie devs:** fast prototyping, collaborative editing, custom scripting.
- **Agencies / marketers:** branded micro-games for campaigns.
- **Educators / students:** accessible sandbox with curated assets and lessons.

## 3. Core Experience
1. **Chat-driven IDE**
   - Persistent conversation: user describes scenes, gameplay, art style.
   - The AI responds with live previews, code diffs, and optional manual edits.
   - Support for prompt snippets (“spawn a parallax background”, “add touch controls”).

2. **Built-in runtime**
   - 2D WebGL/WebGPU renderer with component system (entities, sprites, physics, audio, input).
   - 3D-ready architecture (modular renderer, ECS, asset formats like glTF).

3. **One-click exports**
   - Web build (static bundle hosted anywhere).
   - Desktop apps via Electron or Tauri.
   - Mobile builds via Capacitor/Expo for quick packaging.

4. **Assets + Templates**
   - Starter packs: characters, tilesets, UI kits, audio loops.
   - Template gallery (platformer, endless runner, puzzle, visual novel, top-down adventure).
   - Asset importer (local upload, URLs, future marketplace).

5. **Community Layer**
   - Project sharing links with playable embeds.
   - Remix/fork workflows.
   - Collaborative editing (multi-user session).
   - Template/asset marketplace (donation-driven, later release).

## 4. Feature Breakdown (MVP)
- Chat interface (web UI) + command palette.
- AI orchestration using OpenAI + Claude (routing based on task type: scene description vs. code generation vs. asset organization).
- Runtime engine (TypeScript) with ECS, camera, physics, audio, input, UI overlays.
- Live preview canvas synced with AI edits.
- Export pipeline: web build + desktop (Electron) + mobile (Capacitor) from same project definition.
- Authentication optional (local-first). Cloud sync using hosted mode or user-provided storage (Foldr Space, S3).
- Donation prompts + OSS license (e.g., Apache 2.0 or MIT).

## 5. Future Enhancements
- 3D rendering backend (WebGPU + glTF pipeline).
- Plugin SDK for community-made mechanics/components.
- Auto-generated tutorials + step-by-step lessons.
- Multiplayer networking templates.
- Asset marketplace with revenue share.
- Model fine-tuning for domain-specific prompts.

## 6. Success Criteria
- A first-time user can describe a simple 2D game in chat and deploy a playable web build within minutes.
- Developers can refine generated projects via manual edits + custom scripts.
- Community hub shows shared games, forks, and collaborative sessions.

## 7. Open Questions
- Exact OSS license choice? (default to MIT unless guidance otherwise.)
- Hosting defaults (provide turnkey cloud? rely on self-host + donation-run official instance?)
- How to handle moderation/safety for shared content.
