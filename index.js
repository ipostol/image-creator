var Jimp = require("jimp");

var name = process.argv[3];
var size = process.argv[2].split('x').map(number => parseInt(number, 10));

Jimp.read("image.jpg").then(function (lenna) {
    lenna.resize(size[0], size[1])            // resize 
         .quality(60)                 // set JPEG quality 
         .greyscale()                 // set greyscale 
         .write(name); // save 
}).catch(function (err) {
    console.error(err);
});
