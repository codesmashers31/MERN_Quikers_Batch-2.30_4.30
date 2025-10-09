import Class from "../components/Class";




function About() {
  
const obj = {name:"React",age:"2023"}
  

  return (
  <>
   <div className="bg-blue-300 text-black p-10 flex justify-center align-center">
           <h1>This is About conent</h1>
           <Class myobj={obj}    />
     </div>
    </>
  )
}

export default About;
