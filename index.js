var im = require('imagemagick');
im.readMetadata('training-data/tmax-100-1.jpg', function(err, metadata){
  if (err) throw err;
  console.log('Shot at '+metadata.exif.dateTimeOriginal);
})