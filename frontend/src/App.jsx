import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import VisionMission from "./pages/VisionMission/VisionMission";
import ManagingDirector from "./pages/ManagingDirector/ManagingDirector";
import Leadership from "./pages/Leadership/Leadership";

import BranchPage from "./components/academics/BranchPage";
import academicsData from "./data/academicsData";

import Pedagogy from "./pages/Academics/Pedagogy";
import Curriculum from "./pages/Academics/Curriculum";
import Team from "./pages/Academics/Team";
import PrincipalDesk from "./pages/Academics/PrincipalDesk";
import CoCurriculum from "./pages/Academics/CoCurriculum";

import Branches from "./pages/Branches/Branches";
import CorporateOffice from "./pages/CorporateOffice/CorporateOffice";

import WarjeDisclosure from "./pages/Disclosure/WarjeDisclosure";
import BhilarewadiDisclosure from "./pages/Disclosure/BhilarewadiDisclosure";


import Gallery from "./pages/Gallery/Gallery";
import VideoGallery from "./pages/Gallery/VideoGallery";

import "./App.css";

function App() {
return ( <Router> <div className="app"> <Header />

    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/managing-director" element={<ManagingDirector />} />
        <Route path="/leadership" element={<Leadership />} />


        <Route path="/academics/bhilarewadi" element={<BranchPage branch={academicsData.bhilarewadi} />} />
        <Route path="/academics/warje" element={<BranchPage branch={academicsData.warje} />} />
        <Route path="/academics/manajinagar" element={<BranchPage branch={academicsData.manajinagar} />} />
        <Route path="/academics/undri" element={<BranchPage branch={academicsData.undri} />} />

        <Route path="/academics/solapur" element={<BranchPage branch={academicsData.solapur} />} />
        <Route path="/academics/belagavi" element={<BranchPage branch={academicsData.belagavi} />} />

        <Route path="/academics/:branch/:section/pedagogy" element={<Pedagogy />} />
        <Route path="/academics/:branch/:section/curriculum" element={<Curriculum />} />
        <Route path="/academics/:branch/:section/team" element={<Team />} />
        <Route path="/academics/:branch/:section/principal-desk" element={<PrincipalDesk />} />
        <Route path="/academics/:branch/:section/co-curriculum" element={<CoCurriculum />} />

<Route path="/branches" element={<Branches />} />
<Route path="/corporate-office" element={<CorporateOffice />} />

<Route path="/mandatory-disclosure/warje" element={<WarjeDisclosure />} />
<Route path="/mandatory-disclosure/bhilarewadi" element={<BhilarewadiDisclosure />} />

<Route path="/gallery/photos" element={<Gallery />} />
<Route path="/gallery/videos" element={<VideoGallery />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </main>

    <Footer />
  </div>
</Router>

);
}

export default App;
