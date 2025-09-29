import runCssGenerators from "./css/index.ts";

const generatorsToRun = [runCssGenerators];

generatorsToRun.forEach((g) => g());
