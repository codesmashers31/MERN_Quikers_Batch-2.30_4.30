import { useLocation, useNavigate } from "react-router-dom";

const Home = ()=>{

    const navication = useNavigate()

    const location = useLocation()

     const {name,subject} = location.state;



     const movement = ()=>{
            
    navication("/about")
        
     }

return <>
<div>
    Home
    {name}
    {subject}




    <button className="bg-amber-500 p-3 rounded-3 m-3" onClick={movement}>Move to About</button>
</div>
</>




}

export default Home;