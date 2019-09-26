var PDFDocument = require('pdfkit');
var fs = require('fs');

// Create a new PDFDocument
var doc = new PDFDocument();

doc.pipe(fs.createWriteStream('out.pdf'));

// Set the font, draw some text, and embed an image
doc  
  .text('PNG interlaced images:')
  .image('images/interlaced-grayscale-8bit.png', 100, 160)
  .image('images/interlaced-pallete-8bit.png', 100, 200)
  .image('images/interlaced-rgb-8bit.png', 100, 250)
  .image('images/interlaced-rgb-16bit.png', 100, 300)
  .image('images/interlaced-rgb-alpha-8bit.png', 100, 350);

doc.end();
