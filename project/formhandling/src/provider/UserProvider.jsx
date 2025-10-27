import { useState } from "react";
import { UserContext } from "../context/UserContext";

const UserProvider = ({children})=>{
const [datas,setdatas] = useState({name:"React"})


return(<>


<UserContext.Provider value={{datas,setdatas}}>
{children}

</UserContext.Provider>


</>)

    
}

export default UserProvider;