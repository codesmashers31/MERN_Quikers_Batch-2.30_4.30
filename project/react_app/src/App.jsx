import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Com_Notes from "./pages/Com_Notes";
import HomePage from "./pages/HomePage";
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
     <Routes>
     <Route path="/" element={<HomePage/>} />
      <Route path="/components" element={<Com_Notes/>} />
    </Routes>
    </div>
    <Footer/>
    </>
  );
};

export default App;