var im = require('imagemagick');
im.identify('training-data/tmax-100-1.jpg', function(err, features){
  if (err) throw err;
  console.log(features);
})