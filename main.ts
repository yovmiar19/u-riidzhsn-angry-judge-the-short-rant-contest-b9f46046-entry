// Angry Judge: The Short Rant Contest — entry program.
// Writes one short funny rant about an everyday annoyance to /output/entry.txt.
// The rant: a meeting that should have been an email (or a sticky note that said "nope").

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry text. Must stay byte-exact: 259 characters, 1-400 per the gate.
const RANT = `Eleven adults spent 58 minutes watching Brian share the wrong screen, unmute his barking dog, and finally announce the update: "Nothing has changed." That meeting could have been an email, and honestly the email could have been a sticky note that said "nope."`;

const OUT_FILE = "/output/entry.txt";

function writeRant(text: string, outFile: string): void {
  // The gate requires 1-400 UTF-8 characters, not only whitespace.
  if (text.length < 1 || text.length > 400 || text.trim().length === 0) {
    throw new Error(`rant must be 1-400 non-blank characters, got ${text.length}`);
  }
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, text, "utf8");
}

writeRant(RANT, OUT_FILE);
