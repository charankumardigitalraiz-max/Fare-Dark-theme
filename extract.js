const fs = require('fs');
// read hsre_index.js from the brain
const jsPath = 'C:\\Users\\DIGITALRAIZ\\.gemini\\antigravity\\brain\\941d4be0-ad52-43f1-baa1-9c8b375c68ce\\hsre_index.js';
const content = fs.readFileSync(jsPath, 'utf-8');
const strings = content.match(/(["'])(?:(?=(\\?))\2.)*?\1/g);
if (strings) {
    const texts = strings
        .map(s => s.slice(1, -1))
        .filter(s => s.length > 20 && s.includes(' ') && !s.includes('<path') && !s.includes('function') && !s.includes('return') && /^[a-zA-Z0-9\s.,!?&'\-()]+$/.test(s));
    const unique = [...new Set(texts)];
    fs.writeFileSync('extracted_text.txt', unique.join('\n'));
    console.log("Extracted " + unique.length + " strings");
} else {
    console.log("No strings found");
}
