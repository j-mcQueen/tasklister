import Landing from "./components/landing/Landing";
import Test from "./components/Test";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/stage" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
