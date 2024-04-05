// Importing browser router, install it first --- npm i -D react-router-dom@latest
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing components
import Template from "./components/Template";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
import Member3 from "./components/pages/Member3/member3";
import Member1 from "./components/pages/Member1/member1";
import Member2 from "./components/pages/Member2/member2";
import Member4 from "./components/pages/Member4/member4";
import Member5 from "./components/pages/Member5/member5";
import Error from "./components/pages/error/Error";

import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        {/* Importing the Nav component before nested routes */}
        <Nav />

        {/* Using the Routes and Route components from react-router-dom */}
        <Routes>
          <Route path="/" element={<Template />}>
            <Route path="/member1" element={<Member1 />} />
            <Route path="/member2" element={<Member2 />} />
            <Route path="/member3" element={<Member3 />} />
            <Route path="/member4" element={<Member4 />} />
            <Route path="/member5" element={<Member5 />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>

        {/* Importing the Footer component after nested routes */}
        <Footer />

      </BrowserRouter>
      
    </div>
  );
}

export default App;
