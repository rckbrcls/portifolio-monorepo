export type Language =
  | "JavaScript"
  | "TypeScript"
  | "Python"
  | "Dart"
  | "Go"
  | "Rust";

export type Framework =
  | "React"
  | "React Native"
  | "Next.js"
  | "Flutter"
  | "Express"
  | "Solid.js"
  | "Flask"
  | "Swift"
  | "Svelte";

export type Database = "MongoDB" | "PostgreSQL";

export type ToolOrLibrary = "Tailwind" | "Node.js" | "Webpack" | "Bun" | "Deno";

export type TypeTechStack = Language | Framework | Database | ToolOrLibrary;

export const languages: Language[] = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Dart",
  "Go",
  "Rust",
];

export const frameworks: Framework[] = [
  "React",
  "React Native",
  "Next.js",
  "Flutter",
  "Express",
  "Solid.js",
  "Flask",
  "Swift",
  "Svelte",
];

export const databases: Database[] = ["MongoDB", "PostgreSQL"];

export const toolsAndLibraries: ToolOrLibrary[] = [
  "Tailwind",
  "Node.js",
  "Webpack",
  "Bun",
  "Deno",
];

export const techStack: TypeTechStack[] = [
  ...languages,
  ...frameworks,
  ...databases,
  ...toolsAndLibraries,
];