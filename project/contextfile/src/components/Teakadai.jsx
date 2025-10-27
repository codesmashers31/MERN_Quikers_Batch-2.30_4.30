import { useContext, useState } from "react";
import { ContextData } from "../context/ContextData";

const Teakadai = ()=>{
   
   const {products,datas,setDatas} = useContext(ContextData)
   const [productmilk,setProductMilk] = useState("");
   const [msg,setMsg] = useState(false);

   const handleclick = ()=>{
        //console.log(products);
        // console.log(datas);
        
    if(datas==="tea"){
        
       setMsg(true)
        setTimeout(()=>{
        //    console.log();
           setProductMilk(products[0].product1)
            setMsg(false)
        },2000)

        setTimeout(()=>{
        //    console.log();
           setProductMilk(products[0].product4)
            setMsg(false)
        },3000)


         setTimeout(()=>{
        //    console.log();
           setProductMilk(products[0].product2)
            setMsg(false)
        },4000)

         setTimeout(()=>{
        //    console.log();
           setProductMilk(products[0].product3)
            setMsg(false)
        },5000)

         setTimeout(()=>{
        //    console.log();
           setProductMilk(products[0].product5)
            setMsg(false)
        },6000)
        setTimeout(()=>{
        //    console.log();
           setProductMilk(products[0].price)
            setMsg(false)
        },7000)
    }

   }

     return ( 
        <>
        <input type="text" onChange={(e)=>{setDatas(e.target.value)}} />
        <button onClick={handleclick}>Request</button>

        {msg?"Loading..":<h1>{productmilk } </h1>}
   
       
        </>
     )


}

export default Teakadai;