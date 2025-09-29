import { useState } from "react";

const Hooks_Process = () => {
  const [hide, setHide] = useState(true);
  const [number, setNumber] = useState(1);
  const [series, setSeries] = useState([]);
  const [number_s,setNumber_s] = useState(0)

  // boxhide
  const boxhide = () => {
    setHide(!hide);
  };

  const count = () => {
    setNumber(number + 1);
  };
  

  const start = ()=>{
    let n = 0
    let nn = 1
    let result = [n,nn];

    let nextnum;

   for(let i=2;i<number_s;i++){
         
    //console.log(i);
    
       nextnum = n+nn;
       result.push(nextnum);
       n = nn;
       nn = nextnum;


        

   }

   setSeries(result);



  }
   


    const desing = {
      backgroundColor:hide?"black":"yellow",
      color:hide?"white":"black",
      padding:"20px",
      borderRadius:"300px"
    }



  return (
    <>
      <div className="bg-amber-500 p-10 h-40 flex justify-center items-center">
        <div className=" text-center">
          <p className="text-2xl">Hooks Process</p>
          <p className="text-2xl mb-2">Special Functions</p>
          <button className="bg-white rounded w-20" onClick={boxhide}>
            {hide ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      
        <div className="h-100 flex justify-center items-center">
          <div style={desing}>
            <h1> this is box </h1>
          </div>
        </div>
    

      <div className="h-30 flex justify-center items-center mb-6">
        <div className="bg-black w-30 rounded-full h-30 flex justify-center items-center">
          <h1 className="text-white">{number}</h1>
        </div>
      </div>
      <div className="text-center h-10">
        <button
          className="bg-black rounded w-20 text-white p-1"
          onClick={count}
        >
          Incrment
        </button>
      </div>

      <div className="text-center">
        <button
          className="bg-black rounded w-20 text-white p-1"
          onClick={start}
        >
          Start
        </button>

        {series.join("----")}


        <input className="bg-blue text-black" type="number" onChange={(e)=>{setNumber_s(e.target.value)}} />
      </div>
    </>
  );
};

export default Hooks_Process;
