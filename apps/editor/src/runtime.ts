import { useMemo } from 'react';
import type { RuntimeFrame } from '@gameenginejs/runtime';

type CanvasCtx = CanvasRenderingContext2D | null;

type DrawOptions = {
  canvas: HTMLCanvasElement | null;
  frame: RuntimeFrame;
};

export const useRuntimeCanvas = ({ canvas, frame }: DrawOptions) => {
  return useMemo(() => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    renderScene(ctx, frame);
  }, [canvas, frame]);
};

function renderScene(ctx: CanvasCtx, frame: RuntimeFrame) {
  if (!ctx) return;
  const { scene, summary } = frame;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = '#020617';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.fillStyle = '#22d3ee';
  ctx.font = '16px Inter, sans-serif';
  ctx.fillText(summary.slice(0, 50), 16, 28);

  scene.entities.forEach((entity) => {
    const { position, size, color } = entity.components;
    ctx.fillStyle = color ?? '#facc15';
    ctx.fillRect(position.x, position.y, size.w, size.h);
  });
}
