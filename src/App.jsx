import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import VisionMission from "./pages/VisionMission/VisionMission";
import ManagingDirector from "./pages/ManagingDirector/ManagingDirector";
import Leadership from "./pages/Leadership/Leadership";

import "./App.css";

function App() {
return ( <Router> <div className="app"> <Header />

    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/managing-director" element={<ManagingDirector />} />
        <Route path="/leadership" element={<Leadership />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </main>

    <Footer />
  </div>
</Router>

);
}

export default App;
