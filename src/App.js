import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Tutorials from "./Components/Tutorials";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route
              path="/signup"
              element={<Signup/>}
            ></Route>
            <Route
              path="/login"
              element={<Login/>}
            ></Route>
            <Route path="/tutorials" element={<Tutorials />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
