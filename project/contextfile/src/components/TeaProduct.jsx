import { useState } from "react";
import { ContextData } from "../context/ContextData";


const TeaProduct = ({children})=>{

    const [products,setProducts] = useState([{product1:"Milk",product2:"3 Rouses",product3:"sugar",product4:"water",product5:"tea Class",price:12},
          {product1:"Milk Added",product2:"Boost",product3:"sugar",product4:"water",product5:"Tea Cup",price:25}]);
    const [datas,setDatas] = useState("")
    return (
        <>
        <h1>Products List</h1>
        <ContextData.Provider value={{products,setProducts,datas,setDatas}}>
            {children}
        </ContextData.Provider>
        </>
    )

}

export default TeaProduct;