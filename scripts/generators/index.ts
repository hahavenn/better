import runCssGenerators from "./css/index.ts";
import generateIconMap from "./icons/generateIconMap.ts";

const generatorsToRun = [runCssGenerators, generateIconMap];

generatorsToRun.forEach((g) => g());
