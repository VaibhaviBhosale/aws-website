import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import VisionMission from "./pages/VisionMission/VisionMission";
import ManagingDirector from "./pages/ManagingDirector/ManagingDirector";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <main className="main-content">
          <Routes>
            <Route
              path="/vision-mission"
              element={<VisionMission />}
            />

            <Route
              path="/managing-director"
              element={<ManagingDirector />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;