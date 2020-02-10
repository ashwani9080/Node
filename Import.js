// var e=require('./Export.js');
// var http=require('http');
// console.log(e.sum(10,10));
// const server=http.createServer((req,res)=>{

//     res.end('Helo node'+e.sum(100,1));


// });


// server.listen(8082);

/*Express.......................................*/
// const U=require('./Expor.js')
// const exp=require('express');
// const app=exp()
// app.get('/',(req,res)=>{


   
//         res.send('hello i am using express ');

// });
//   app.listen(8082);

/*F S.......................................*/


const fs=require('fs')
const fileName="file.txt";
fs.watch(fileName,()=> console.log("my file"));


//let data=fs.readFileSync(fileName);


//console.log(data.toString());


 fs.readFile(fileName,(err,data)=>{
     if(err)
         console.log(err);
     console.log(data.toLocaleString());


 });


 console.log('file syncronize');

 