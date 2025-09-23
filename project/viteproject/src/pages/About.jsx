const About = ()=>{

const newdata = "This is the react dynamic values"

const obgnew = {title:"React",subject:"This is compoenent based archi"}
const obj = [{title:"React",subject:"This is compoenent based archi"},{title:"Node",subject:"This is Backend process"},]




return(
    <>
    <h1>This is data</h1>
    
    <p>{newdata}</p>

    <div>
        <h1 style={{color:"red"}}>{obgnew.title}</h1>
    </div>



    <div>
        {obj.map((e,i)=>(

             <div key={i}>
            <h1>{e.title}</h1>
            <p>{e.subject}</p>
        </div>


        ))}



       
    </div>

    </>
)



}


export default About;