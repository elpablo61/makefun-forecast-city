import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Sleetford: snow, -6°C. Mr. Abernathy shovelled his drive at dawn. The snow waited till he finished, then came back.";

// Gate: the entry must be 1-120 characters, a single line.
if (line.length < 1 || line.length > 120 || line.includes("\n")) {
  throw new Error(`entry is ${line.length} chars, must be 1-120, one line`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");

// Finisher: keep forecast line verbatim; no visual change.
