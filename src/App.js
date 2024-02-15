import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (

      <BrowserRouter>
        <Routes>
      <Route path="/" element={<HomePage />}></Route>


</Routes>
</BrowserRouter>

  );

}

export default App;
