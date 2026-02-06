import { toPng } from 'html-to-image';

export type PlannerSnapshotOptions = {
  element: HTMLElement;
  fitToBounds?: boolean;
  backgroundColor?: string;
  pixelRatio?: number;
};

export const capturePlannerSnapshot = async ({
  element,
  fitToBounds = true,
  backgroundColor = '#0f1320',
  pixelRatio = 2,
}: PlannerSnapshotOptions): Promise<string> => {
  const width = fitToBounds ? element.scrollWidth : element.clientWidth;
  const height = fitToBounds ? element.scrollHeight : element.clientHeight;

  return toPng(element, {
    cacheBust: true,
    backgroundColor,
    pixelRatio,
    width,
    height,
    style: {
      width: `${width}px`,
      height: `${height}px`,
    },
  });
};
