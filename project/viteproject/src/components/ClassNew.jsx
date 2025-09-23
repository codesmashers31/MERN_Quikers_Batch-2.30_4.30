import { Component } from "react";

class ClassNew extends Component {

    
    constructor(props){
        
        super(props)
        this.state = {count:0}
        this.num = 0;
        console.log('Compoent is running');
    }

incerce = ()=>{

    this.setState({count:this.state.count+1})
    this.setState(this.num+1)
    console.log('Compoent is running');

}



    render(){
        return (
            <>
            <h1>{this.state.count}</h1>
              <h1>{this.num}</h1>

            <button onClick={this.incerce}>Click to change</button>
            </>
        )
    }

   
}


export default ClassNew;