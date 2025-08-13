import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

//@typescript-eslint/no-explicit-any
export const fullConfig: any = resolveConfig(tailwindConfig);
