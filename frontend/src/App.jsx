import { Routes, Route } from "react-router-dom"
// import {  } from "./components";
import {Header, Home, Navbar, Login, SignUp, Contact, About, Shop } from "./components";

// import Main from ".";

function App() {
  return (
    <>

      {/* <div className="Nav1">
    
        {/* <Navbar />
        <Header /> */}
        {/* <Main />      
       
        <Header /> */}
    
        {/* <Home /> */}
        
          
          
      

      <Routes> {/* The Routes decides which component to show based on the current URL.*/}
      <Route exact path="/" element={<div className="Nav1"><Navbar/> <Header /> <Home /></div>} />
        <Route path="/shop" element={<><Navbar/><Shop /></>} />
        <Route path="/contact" element={<><Navbar/><Contact/></>} />
        <Route path="/about" element={<div className="about">< About/></div>} />
        <Route path="/login" element={<><Login /></>} />
        <Route path="/signup" element={<><SignUp /></>} />
    </Routes>
    </>
  );
}

export default App;
