import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import HomePage from "./pages/HomePage";
import Writing from "./pages/Writing";
import Misc from "./pages/Misc";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header><HomePage /></Header>}></Route>
        <Route path="/writing" element={<Header><Writing /></Header>}></Route>
        <Route path="/misc" element={<Header><Misc /></Header>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
