import { useEffect, useMemo, useRef, useState } from 'react';
import type { RuntimeFrame } from '@gameenginejs/runtime';

import { useRuntimeCanvas } from './runtime';
import './app.css';

const API_URL = 'http://localhost:8787';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const emptyFrame: RuntimeFrame = {
  summary: 'No scene yet.',
  scene: { entities: [] }
};

export function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Describe a scene and I will build the runtime graph.'
    }
  ]);
  const [draft, setDraft] = useState('');
  const [sending, setSending] = useState(false);
  const [frame, setFrame] = useState<RuntimeFrame>(emptyFrame);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useRuntimeCanvas({ canvas: canvasRef.current, frame });

  const sendPrompt = async () => {
    if (!draft.trim()) return;
    const promptText = draft.trim();
    const nextUser: Message = { role: 'user', content: promptText };
    setMessages((prev) => [...prev, nextUser]);
    setDraft('');
    setSending(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([{ role: 'user', content: promptText }])
      });

      const data: RuntimeFrame = await res.json();
      const assistantMessage: Message = { role: 'assistant', content: data.summary };
      setMessages((prev) => [...prev, assistantMessage]);
      setFrame(data);
    } catch (error) {
      const fallback: RuntimeFrame = {
        summary: 'Stubbed response. (Run `pnpm dev:ai` for live output.)',
        scene: {
          entities: [
            {
              id: 'player-fallback',
              components: {
                position: { x: 60, y: 160 },
                size: { w: 36, h: 36 },
                color: '#facc15'
              }
            }
          ]
        }
      };
      setMessages((prev) => [...prev, { role: 'assistant', content: fallback.summary }]);
      setFrame(fallback);
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    const handler = (ev: KeyboardEvent) => {
      if ((ev.metaKey || ev.ctrlKey) && ev.key === 'Enter') {
        sendPrompt();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  const latestSummary = useMemo(() => frame.summary, [frame]);

  return (
    <main>
      <header>
        <div>
          <h1>gameengine.js</h1>
          <p>Phase 1 prototype — chat on the left, runtime preview on the right.</p>
        </div>
        <div className="tag">entities {frame.scene.entities.length}</div>
      </header>

      <section className="workspace">
        <article className="panel chat">
          <h2>Chat</h2>
          <div className="chat-log">
            {messages.map((msg, idx) => (
              <div key={idx} className={`bubble ${msg.role}`}>
                <span>{msg.content}</span>
              </div>
            ))}
          </div>
          <textarea
            placeholder="Describe your scene…"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            disabled={sending}
          />
          <button onClick={sendPrompt} disabled={sending}>
            {sending ? 'Generating…' : 'Send'}
          </button>
        </article>

        <article className="panel preview">
          <h2>Runtime Preview</h2>
          <p className="preview-summary">{latestSummary}</p>
          <canvas ref={canvasRef} width={480} height={260} />
        </article>
      </section>
    </main>
  );
}
