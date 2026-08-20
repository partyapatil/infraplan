import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./app/layout/MainLayout";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import ContractorsPage from "./pages/ContractorsPage";
import HydraulicLabPage from "./pages/HydraulicLabPage";
import SigmaToolboxPage from "./pages/SigmaToolboxPage";
import ContactPage from "./pages/ContactPage";
import PublicationsPage from "./pages/Publicationspage";
import MathematicalModelStudiesPage from "./pages/MathematicalModelStudiesPage";
import PhysicalModelStudiesPage from "./pages/PhysicalModelStudiesPage";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contract",
        element: <ContractorsPage />,
      },
      {
        path: "/hydrolic",
        element: <HydraulicLabPage />,
      },
      {
        path: "/toolbox",
        element: <SigmaToolboxPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/publications",
        element: <PublicationsPage />,
      },
      {
        path: "/hydrolicpublications",
        element: <PublicationsPage />,
      },
      {
        path: "/mathematical-model-studies",
        element: <MathematicalModelStudiesPage />,
      },
      {
        path: "/physical-model-studies",
        element: <PhysicalModelStudiesPage />,
      },
    ],
  },
]);

export default router;