import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrangChu from "./pages/trangchu";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import TimTruong from "./pages/timtruong";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TrangChu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/tim-truong" element={<TimTruong />} />
      </Routes>
    </Router>
  );
}

export default App;
