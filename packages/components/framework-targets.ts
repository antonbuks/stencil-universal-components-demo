import { reactOutputTarget } from "@stencil/react-output-target";
import {
  angularOutputTarget,
  ValueAccessorConfig,
} from "@stencil/angular-output-target";

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ["test-input"],
    event: "scaleChange",
    targetAttr: "value",
    type: "text",
  },
  // Tests won't pass for these
  // https://github.com/ionic-team/stencil-ds-output-targets/blob/master/packages/example-project/component-library-angular/__tests__/my-checkbox.spec.ts
  {
    elementSelectors: ["scale-input[type=checkbox]"],
    event: "scaleChange",
    targetAttr: "checked",
    type: "boolean",
  },
  {
    elementSelectors: ["scale-input[type=radio]"],
    event: "scaleChange",
    targetAttr: "checked",
    type: "radio",
  },
  {
    elementSelectors: ["scale-input[type=select]"],
    event: "scaleChange",
    targetAttr: "value",
    type: "select",
  },
  {
    elementSelectors: ["scale-slider"],
    event: "scaleChange",
    targetAttr: "value",
    type: "number",
  },
];

export const frameworkTargets = [
  reactOutputTarget({
    componentCorePackage: "@workspace/components",
    proxiesFile: "../components-react/src/components.ts",
  }),
  angularOutputTarget({
    componentCorePackage: "@workspace/components",
    directivesProxyFile: "../components-angular/src/directives/proxies.ts",
    directivesArrayFile:
      "../components-angular/src/directives/proxies-list.tsx",
    valueAccessorConfigs: angularValueAccessorBindings,
  }),
];
