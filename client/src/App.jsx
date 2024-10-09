import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomePage/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/LoginSignupPage/Login";
import Signup from "./pages/LoginSignupPage/Signup";
import Logout from "./pages/LoginSignupPage/Logout";
import CarbonFootprintCalculator from "./pages/CarbonFootprintCalculator/CarbonFootprintCalculator";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <div className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/calculator" element={<CarbonFootprintCalculator />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
