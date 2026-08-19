// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./components/Footer";
import InfraplanSiteV3 from "./pages/HomePage";
import AboutPage from "./pages/About";
import ContractorsPage from "./pages/ContractorsPage";
import HydraulicLabPage from "./pages/HydraulicLabPage";
import SigmaToolboxPage from "./pages/SigmaToolboxPage";
import ContactPage from "./pages/ContactPage";
import PublicationsPage from "./pages/Publicationspage";

// Layout wrapper with optional secondary nav
function Layout({ children}) {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><InfraplanSiteV3 /></Layout>} />
      <Route path="/about" element={<Layout showSecondaryNav={true}><AboutPage /></Layout>} />
      <Route path="/contract" element={<Layout><ContractorsPage /></Layout>} />
      <Route path="/hydrolic" element={<Layout showSecondaryNav={true}><HydraulicLabPage /></Layout>} />
      <Route path="/toolbox" element={<Layout><SigmaToolboxPage /></Layout>} />
      <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
      <Route path="/hydrolicLabpublications" element={<Layout><PublicationsPage /></Layout>} />
      <Route path="/publications" element={<Layout><PublicationsPage /></Layout>} />
    </Routes>
  );
}