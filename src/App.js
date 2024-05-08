// CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Routes
import { Routes, Route } from "react-router-dom";

//Pages
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Navigation from "./components/Navbar";
import ListingPage from "./pages/ListingPage";

function App() {
  
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/book/list" element={<ListingPage />} />
      </Routes>
    </div>
  );
}

export default App;
