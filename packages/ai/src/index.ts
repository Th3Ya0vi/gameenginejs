export type Prompt = {
  role: 'user' | 'system';
  content: string;
};

export type RuntimeFrame = {
  summary: string;
  scene: {
    entities: {
      id: string;
      components: Record<string, unknown>;
    }[];
  };
};

export async function orchestrate(prompts: Prompt[]): Promise<RuntimeFrame> {
  const last = prompts[prompts.length - 1];
  const summary = last?.content ?? 'No prompt received.';

  return {
    summary,
    scene: {
      entities: [
        {
          id: 'player',
          components: {
            position: { x: Math.floor(Math.random() * 200), y: 120 },
            size: { w: 40, h: 40 },
            color: '#facc15'
          }
        }
      ]
    }
  };
}
