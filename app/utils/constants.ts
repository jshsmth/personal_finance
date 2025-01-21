import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);
export const colors = fullConfig.theme.colors;

export const data = [
  { name: "Group A", value: 120 },
  { name: "Group B", value: 25 },
  { name: "Group C", value: 50 },
  { name: "Group D", value: 50 },
];

export const COLORS = [
  colors.secondary.cyan,
  colors.secondary.green,
  colors.secondary.navy,
  colors.secondary.yellow,
];
