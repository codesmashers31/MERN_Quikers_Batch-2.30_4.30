import Inputs from "../components/Inputs";
import NavBar from "../components/NavBar";

const Home = ()=>{

    return (
        <>
        <header className="navbar">
            <div>
                Logo
            </div>
            <nav >
             <div className='navbernew'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contect</a>
                <a href="">Services</a>
             </div>
            </nav>
        </header>

        <div className="form-container">
        <h2>User Input Form</h2>
        <form>
          <input type="text" placeholder="Enter your name" required />

          <input type="email" placeholder="Enter your email" required />

          <input type="password" placeholder="Enter your password" required />

          <input type="number" placeholder="Enter your age" />

          <button type="submit">Submit</button>
        </form>
      </div>


      <Data/>
        </>
    )

}

export default Home;





export const Data = ()=>{

return (

    <h1>This is array</h1>
)


}
