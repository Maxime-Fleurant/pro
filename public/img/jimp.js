const Jimp = require('jimp');

// open a file called "lenna.png"
const image = './build/cover.jpeg';

Jimp.read(image, (err, lenna) => {
  if (err) throw err;
  lenna
    .scale(0.5)

    .write(image); // save
});
