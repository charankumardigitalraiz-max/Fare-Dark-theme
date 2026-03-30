import mammoth from "mammoth";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function readDoc(fileName) {
  try {
    const fullPath = path.join(__dirname, "public", fileName);
    const result = await mammoth.extractRawText({ path: fullPath });
    console.log(`\n\n=== CONTENT OF ${fileName} ===\n`);
    console.log(result.value);
  } catch (err) {
    console.error(`Error reading ${fileName}:`, err);
  }
}

async function main() {
  await readDoc("FARE_Freshers_Landing_Page.docx");
  await readDoc("Final trainer landing page.docx");
}

main();
