const mammoth = require('mammoth');
const fs = require('fs');

async function run() {
  try {
    const fRes = await mammoth.extractRawText({path:'D:/charan/React/Fair-website/public/FARE_Freshers_Landing_Page.docx'});
    fs.writeFileSync('D:/charan/React/Fair-website/public/freshers.txt', fRes.value);
    console.log("Freshers doc parsed successfully.");

    const tRes = await mammoth.extractRawText({path:'D:/charan/React/Fair-website/public/Final trainer landing page.docx'});
    fs.writeFileSync('D:/charan/React/Fair-website/public/trainer.txt', tRes.value);
    console.log("Trainer doc parsed successfully.");
  } catch (err) {
    console.error(err);
  }
}
run();
