import Fb from "./Pages/Fb";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import LinkedIn from "./Pages/LinkedIn"
import Insta from "./Pages/Insta"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Footer from "./Pages/Footer";

function App() {
  return (
    <>

    <BrowserRouter>
    <Navbar />
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/facebook" element={<Fb />} />
    <Route path="/linkedin" element={<LinkedIn />} />
    <Route path="/instagram" element={<Insta />} />

    </Routes>
   <Footer />
    </BrowserRouter>

   
    
    </>
  );
}

export default App;
