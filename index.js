var fs = require('fs'), 
    gm = require('gm'),
    directory = './training-data/';
    
fs.readdir(directory,function(err,files){
    if(err) throw err;
    files.forEach(function(file){
        // do something with each file HERE!
        gm(directory + file)
        .size(function (err, metadata) {
            if(!err) {
                console.log(metadata);
            }
        });
    });
});