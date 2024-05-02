import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
