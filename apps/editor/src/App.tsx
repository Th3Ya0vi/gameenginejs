import { useEffect, useMemo, useState } from 'react';

import './app.css';

const API_URL = 'http://localhost:8787';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type RuntimeState = {
  version: number;
  summary: string;
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
  const [runtime, setRuntime] = useState<RuntimeState>({ version: 0, summary: '' });

  const previewMessage = useMemo(() => runtime.summary || 'No scene yet.', [runtime]);

  const sendPrompt = async () => {
    if (!draft.trim()) return;
    const nextUser: Message = { role: 'user', content: draft.trim() };
    setMessages((prev) => [...prev, nextUser]);
    setDraft('');
    setSending(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([{ role: 'user', content: nextUser.content }])
      });

      const data = await res.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.summary ?? 'Generated scene diff.'
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setRuntime({ version: runtime.version + 1, summary: assistantMessage.content });
    } catch (error) {
      const fallback: Message = {
        role: 'assistant',
        content: 'Stubbed response. (Run `pnpm --filter ai dev` for live output.)'
      };
      setMessages((prev) => [...prev, fallback]);
      setRuntime({ version: runtime.version + 1, summary: fallback.content });
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

  return (
    <main>
      <header>
        <div>
          <h1>gameengine.js</h1>
          <p>Phase 1 prototype — chat on the left, runtime preview on the right.</p>
        </div>
        <div className="tag">runtime v{runtime.version}</div>
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
          <CanvasPreview version={runtime.version} summary={previewMessage} />
        </article>
      </section>
    </main>
  );
}

type CanvasProps = {
  version: number;
  summary: string;
};

const CanvasPreview = ({ version, summary }: CanvasProps) => {
  useEffect(() => {
    const canvas = document.getElementById('runtime-canvas') as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#22d3ee';
    ctx.font = '16px Inter, sans-serif';
    ctx.fillText(`Runtime tick ${version}`, 16, 28);

    ctx.fillStyle = '#c084fc';
    ctx.fillText(summary.slice(0, 40), 16, 56);

    // simple animated sprite substitute
    ctx.fillStyle = '#facc15';
    ctx.fillRect(40 + (version % 200), 120, 40, 40);
  }, [version, summary]);

  return <canvas id="runtime-canvas" width={480} height={260} />;
};
