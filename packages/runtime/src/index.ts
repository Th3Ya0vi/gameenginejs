import { type RuntimeFrame, type Scene } from './scene';

export class Engine {
  private scene: Scene;

  constructor(initialScene?: Scene) {
    this.scene = initialScene ?? { entities: [] };
  }

  load(frame: RuntimeFrame) {
    this.scene = frame.scene;
  }

  get current() {
    return this.scene;
  }
}

export type { Scene, RuntimeFrame } from './scene';
