export type Component = Record<string, unknown>;

export type Entity = {
  id: string;
  components: Component;
};

export type Scene = {
  entities: Entity[];
};

export type RuntimeFrame = {
  summary: string;
  scene: Scene;
};

export const createScene = (): Scene => ({ entities: [] });
