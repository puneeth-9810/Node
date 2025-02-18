const fs=require('fs');

const readStream=fs.createReadStream('./docs/blogs1.txt',{encoding:'utf8'});
const writeStream=fs.createWriteStream('./docs/blog2.txt');


// readStream.on('data',(chunk)=>{
//     console.log('.....new chunk....');
//     console.log(chunk);
//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk);
// });

readStream.pipe(writeStream);

