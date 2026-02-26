import { createScene, type RuntimeFrame, type Scene } from './scene';

export class Engine {
  private scene: Scene;

  constructor(initialScene?: Scene) {
    this.scene = initialScene ?? createScene();
  }

  load(frame: RuntimeFrame) {
    this.scene = frame.scene;
  }

  get current() {
    return this.scene;
  }
}

export const createEngine = () => new Engine();
export { createScene };
export type { Scene, RuntimeFrame };
