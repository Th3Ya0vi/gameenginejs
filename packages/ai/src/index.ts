export type Prompt = {
  role: 'user' | 'system';
  content: string;
};

export type RuntimeFrame = {
  summary: string;
  scene: {
    entities: EntityLike[];
  };
};

type EntityLike = {
  id: string;
  components: {
    position: { x: number; y: number };
    size: { w: number; h: number };
    color: string;
  };
};

const palette = ['#facc15', '#22d3ee', '#f472b6', '#34d399', '#c084fc'];

export async function orchestrate(prompts: Prompt[]): Promise<RuntimeFrame> {
  const last = prompts[prompts.length - 1];
  const summary = last?.content ?? 'No prompt received.';
  const entities = buildEntitiesFromPrompt(summary);

  return {
    summary,
    scene: {
      entities
    }
  };
}

function buildEntitiesFromPrompt(prompt: string): EntityLike[] {
  const base: EntityLike[] = [
    {
      id: 'player',
      components: {
        position: { x: 60, y: 160 },
        size: { w: 36, h: 36 },
        color: palette[0]
      }
    }
  ];

  if (!prompt) return base;

  if (/platform/i.test(prompt)) {
    base.push({
      id: 'platform',
      components: {
        position: { x: 40, y: 210 },
        size: { w: 320, h: 20 },
        color: '#475569'
      }
    });
  }

  if (/enemy|boss/i.test(prompt)) {
    base.push({
      id: 'enemy',
      components: {
        position: { x: 260, y: 160 },
        size: { w: 32, h: 32 },
        color: palette[2]
      }
    });
  }

  if (/pickup|coin|star/i.test(prompt)) {
    base.push({
      id: 'pickup',
      components: {
        position: { x: 180, y: 120 },
        size: { w: 20, h: 20 },
        color: palette[4]
      }
    });
  }

  if (/background|city|forest/i.test(prompt)) {
    base.push({
      id: 'backdrop',
      components: {
        position: { x: 0, y: 40 },
        size: { w: 420, h: 80 },
        color: 'rgba(148,163,184,0.2)'
      }
    });
  }

  return base;
}
