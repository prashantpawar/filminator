var fs = require('fs'), 
    gm = require('gm');
var tmax100_1 = 'training-data/tmax-100-1.jpg',
    velvia50_1 = 'training-data/velvia-50-1.jpg';

gm(tmax100_1)
.size(function (err, size) {
  if (!err) {
    console.log(size);
  }
});

gm(velvia50_1)
.identify(function (err, metadata) {
    if(!err) {
        console.log(metadata);
    }
});