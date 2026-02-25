import './app.css';

export function App() {
  return (
    <main>
      <section>
        <h1>gameengine.js</h1>
        <p>Chat with the engine to build a playable scene.</p>
      </section>
      <section className="panes">
        <article>
          <h2>Chat</h2>
          <div className="placeholder">Chat UI coming soon.</div>
        </article>
        <article>
          <h2>Live Preview</h2>
          <div className="placeholder">Runtime canvas placeholder.</div>
        </article>
      </section>
    </main>
  );
}
