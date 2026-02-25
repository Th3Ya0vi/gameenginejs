export type Prompt = {
  role: 'user' | 'system';
  content: string;
};

export type OrchestratorResult = {
  summary: string;
  projectDelta: Record<string, unknown>;
};

export async function orchestrate(prompts: Prompt[]): Promise<OrchestratorResult> {
  // Placeholder – wire up OpenAI + Claude routing later.
  return {
    summary: `Received ${prompts.length} prompt segments. AI wiring pending.`,
    projectDelta: {}
  };
}
