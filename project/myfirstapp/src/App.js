
import React from 'react';
import './App.css';

function App() {


  const a = 10;
  const datas = [{name:"React",class:"New"},{name:"JS",class:"A"},{name:"Node",class:"B"}]




  return (
    <>
    <div>
      <h1>This is React! Welcome {a}</h1>
      
    </div>

    <ul>
        {datas.map((e,i)=>(
           <>
          <li key={i}>{i+1}</li>
          <li>{e.name}</li>
           <li>{e.class}</li>
          </>

        ))}
    </ul>


    </>
  );
}

export default App;



