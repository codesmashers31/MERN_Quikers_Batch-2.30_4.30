import { log } from 'console'
import http from'http'


// console.log(http);


const server = http.createServer()

const PORT = 3000
server.listen(PORT,()=>{
    console.log(`succfully running http://localhost/${PORT}`);
    
})