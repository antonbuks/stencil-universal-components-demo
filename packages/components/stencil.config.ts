import { Config } from "@stencil/core";
import { postcss } from "@stencil/postcss";
import postcssCustomMedia from "postcss-custom-media";
import { frameworkTargets } from "./framework-targets";

export const config: Config = {
  namespace: "stencil-demo",
  globalStyle: "src/global/scale.css",
  plugins: [
    postcss({
      plugins: [postcssCustomMedia()],
    }),
  ],
  outputTargets: [
    ...frameworkTargets,
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
  ],
};
