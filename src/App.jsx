//import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Balikbayan from "./pages/Balikbayan.jsx";
import Articles from "./pages/Articles.jsx";
import Resources from "./pages/Resources.jsx";
import Artists from "./pages/Artists.jsx";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/balikbayan" element={<Balikbayan />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/artists" element={<Artists />} />
      </Routes>
    </>
  );
}

export default App;
