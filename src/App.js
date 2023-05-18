import Landing from "./components/landing/Landing";
import Stage from "./components/stage/Stage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tasklister" element={<Landing />} />
        <Route path="/stage" element={<Stage />} />
      </Routes>
    </Router>
  );
}

export default App;
