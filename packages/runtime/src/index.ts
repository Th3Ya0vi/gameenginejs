export type Vector2 = { x: number; y: number };

export interface Entity {
  id: string;
  components: Record<string, unknown>;
}

export class Engine {
  private entities: Map<string, Entity> = new Map();

  addEntity(entity: Entity) {
    this.entities.set(entity.id, entity);
  }

  tick(dt: number) {
    for (const entity of this.entities.values()) {
      // Placeholder update loop; plug systems in later.
      void entity;
    }
    return dt;
  }
}

export const createEngine = () => new Engine();
