import * as PixiType from "pixi.js";
import * as ReactPixiType from "@pixi/react";

export let reactPixi: typeof ReactPixiType;
export let pixi: typeof PixiType;

export let useTick: typeof ReactPixiType.useTick = () => {};

export const loadReactPix = async () => {
  pixi = await import("pixi.js");
  reactPixi = await import("@pixi/react");
  useTick = reactPixi.useTick;
};
