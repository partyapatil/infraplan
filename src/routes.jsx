import { createBrowserRouter, Navigate } from "react-router-dom";

import MainLayout from "./app/layout/MainLayout";
import AdminProjects from "./admin/admin/AdminProjects";
import AdminMasters from "./admin/admin/AdminMasters";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import ContractorsPage from "./pages/ContractorsPage";
import HydraulicLabPage from "./pages/HydraulicLabPage";
import SigmaToolboxPage from "./pages/SigmaToolboxPage";
import ContactPage from "./pages/ContactPage";
import PublicationsPage from "./pages/Publicationspage";
import MathematicalModelStudiesPage from "./pages/MathematicalModelStudiesPage";
import PhysicalModelStudiesPage from "./pages/PhysicalModelStudiesPage";

import AdminLayout from "./admin/admin/AdminLayout";
import AdminLogin from "./admin/admin/AdminLogin";
import AdminPublications from "./admin/admin/AdminPublications";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contract", element: <ContractorsPage /> },
      { path: "/hydrolic", element: <HydraulicLabPage /> },
      { path: "/toolbox", element: <SigmaToolboxPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/publications", element: <PublicationsPage /> },
      { path: "/hydrolicpublications", element: <PublicationsPage /> },
      { path: "/mathematical-model-studies", element: <MathematicalModelStudiesPage /> },
      { path: "/physical-model-studies", element: <PhysicalModelStudiesPage /> },
    ],
  },

  // Admin pages: outside MainLayout, so no site Header/Footer
  { path: "/admin/login", element: <AdminLogin /> },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to="projects" replace /> },
      { path: "projects", element: <AdminProjects /> },
      { path: "publications", element: <AdminPublications /> },
      { path: "masters", element: <AdminMasters /> },
    ],
  },
]);

export default router;


