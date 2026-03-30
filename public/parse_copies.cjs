const fs = require('fs');

async function run() {
  try {
    // We already have mammoth in D:\temp_doc_ext\node_modules
    const mammoth = require('D:/temp_doc_ext/node_modules/mammoth');
    const fRes = await mammoth.extractRawText({path:'D:/charan/React/Fair-website/public/temp_freshers.docx'});
    fs.writeFileSync('D:/charan/React/Fair-website/public/freshers_content.txt', fRes.value);
    console.log("Freshers doc parsed successfully.");

    const tRes = await mammoth.extractRawText({path:'D:/charan/React/Fair-website/public/temp_trainer.docx'});
    fs.writeFileSync('D:/charan/React/Fair-website/public/trainer_content.txt', tRes.value);
    console.log("Trainer doc parsed successfully.");
  } catch (err) {
    console.error(err);
  }
}
run();
