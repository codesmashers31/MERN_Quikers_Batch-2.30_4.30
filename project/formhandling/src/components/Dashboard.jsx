import { useLocation } from "react-router-dom";
import "../App.css"

const Dashboard=()=>{
const location = useLocation()

const {name,city,mobile,cname,clocation,coption,reason} = location.state;

return<>

<div className="p-10">
<div className="bg-blue-500  h-150 p-10 text-white text-2xl rounded-3xl">
    <h1 className=" text-center ">Premission Letter</h1> 
    <h2>From:</h2>
    <h3 className="mx-15">{name}</h3>
    <h3 className="mx-15">{city}</h3>
    <h3 className="mx-15">{mobile}</h3>

    <h2>To</h2>
    <h3 className="mx-15">The {coption}</h3>
    <h3 className="mx-15">{cname}</h3>

    <h3 className="mx-15">{clocation}</h3>

    <p className="my-10">Respected Sir/Madam,</p>

    <p className="mt-2 mx-15">{reason}
     </p>
     <p className="text-center my-10">Thanking You,</p>

     <p className="text-end">Your Faithfully,</p>
     <p className="text-end">{name}</p>
</div>
</div>


</>

}
export default Dashboard;