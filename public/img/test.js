const imagemin = require('imagemin-keep-folder');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async () => {
  const files = await imagemin(
    ['./books/**/**/*.{jpg,png,jpeg}'],

    {
      replaceOutputDir: (output) => {
        return output.replace(/books\//, 'build/');
      },
      plugins: [
        imageminMozjpeg({ quality: 50 }),
        imageminPngquant({
          quality: [0.5, 0.6],
        }),
      ],
    }
  );

  console.log(files);
})();

// (async () => {
//   const files = await imagemin(['./build/*.{jpg,png,jpeg}'], {
//     destination: 'build/',
//     plugins: [
//       imageminMozjpeg({ quality: 40 }),
//       imageminPngquant({
//         quality: [0.5, 0.8],
//       }),
//     ],
//   });

//   console.log(files);
// })();
