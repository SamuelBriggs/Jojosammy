import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Writing from "./pages/Writing";
import Misc from "./pages/Misc";
import Rust from "./blog/Rust";
import Breaking from "./blog/breaking";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/writing" element={<Writing />}></Route>
        <Route path="/misc" element={<Misc />}></Route>
        <Route path="writing/rust" element={<Rust />}></Route>
          <Route path="misc/breaking" element={<Breaking />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
