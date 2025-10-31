import { useReducer } from "react"

const initstate = {count:0}

const reducer = (state,action)=>{
  
  console.log('Reducer running');
  // console.log(state.count);

  // if(action.type === "INCREMENT") return {count:state.count+1}
  // if(action.type === "DECREMENT") return {count:state.count-1}
  // if(action.type === "Reset") return {count:0}
  

  switch (action.type){

       case "INCREMENT":
        return {count:state.count+1}
      case "DECREMENT":
        return {count:state.count-1}
        case "Reset":
          return {count:0}
        default:
          return state

  }

  

}


const App = () => {
   console.log('Compoenent running');
 const [state,dispatch] = useReducer(reducer,initstate) 


  return (
    <div>
      <h1>Reduce</h1>
      <p>{state.count}</p>
      <button onClick={()=>{dispatch({type:"INCREMENT"} ); console.log('dispach running');
       } }>Increment ++</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement --</button>
      <button onClick={()=>dispatch({type:"Reset"})}>Reset --</button>
    </div>
  )
}

export default App
