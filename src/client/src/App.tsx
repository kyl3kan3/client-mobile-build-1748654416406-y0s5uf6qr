
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UploadPage from "./components/UploadPage";
import ResultsPage from "./components/ResultsPage";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
