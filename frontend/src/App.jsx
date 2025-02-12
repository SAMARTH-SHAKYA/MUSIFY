import Login from "./components/pages/login";
import Navbar from "./components/pages/navBar";
import { Button } from "./components/ui/button";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
