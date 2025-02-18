const fs=require('fs');

//fs.readFile('./docs/blogs.txt');
// fs.readFile('./docs/blogs.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//     }
// });

// console.log('last line');

// fs.writeFile('./docs/blogs.txt','hello, world',()=>{
//     console.log('file was written');
// });

// if(!fs.existsSync('./assets')){
// fs.mkdir('./assets',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('folder created');
//     }
// });
// }else{
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log('directory deleted');
//         }
//     })
// }

if(fs.existsSync('./docs/deleteitem.txt')){
    fs.unlink('./docs/deleteitem.txt',(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('file deleted');
        }
    });
}