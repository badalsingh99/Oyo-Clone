import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Login from './Component/Pages/API/Login';
import Singlepage from './Component/Pages/API/Singlepage';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Component/Pages/Home';
import Filltersidebar from './Component/Pages/Hotels/Filltersidebar';
import Registration1 from './Component/Pages/RegistrationForm/Registration1';
import Registration2 from './Component/Pages/RegistrationForm/Registration2';
import Registration3 from './Component/Pages/RegistrationForm/Registration3';
import Registration4 from './Component/Pages/RegistrationForm/Registration4';

const App = () => {
  return (
    <BrowserRouter>
         <Header/>
          <Routes>
              <Route>
                {/* <Route index element={<Header2 />} />  */}
                <Route path="login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/Registration1" element={<Registration1 />} />
                <Route path="/Registration2" element={<Registration2 />} />
                <Route path="/Registration3" element={<Registration3 />} />
                <Route path="/Registration4" element={<Registration4 />} />
                <Route path="/Singlepage" element={<Singlepage />} />
                <Route path="/Filltersidebar" element={<Filltersidebar />} />
                {/* <Route path="*" element={<NoPage />} /> */}
              </Route>
            </Routes>
          <Footer/>
        
        

    </BrowserRouter>
  )
}

export default App;