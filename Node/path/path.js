import path from 'path';


// console.log(path);


const datas = "MERN_Quikers_Batch-2.30_4.30/Node/path/path_data.txt"

console.log('Direct Name',path.dirname(datas));
console.log('Pathname',path.basename(datas));
console.log('Pathname',path.extname(datas));




console.log(path.join("mern","datas","new","process.js"));


console.log(path.resolve());

