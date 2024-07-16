const fs = require('fs');
const pdf = require('pdf-parse');
// import fs from 'fs';
// import pdf from 'pdf-parse';

let dataBuffer = fs.readFileSync('./21EPTCS011.pdf');

pdf(dataBuffer).then(function(data) {
    let text = data.text;
    let json = { text: text };
    fs.writeFileSync('21EPTCS011.json', JSON.stringify(json));
});