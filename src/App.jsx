import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./app/layout/MainLayout";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import ContractorsPage from "./pages/ContractorsPage";
import HydraulicLabPage from "./pages/HydraulicLabPage";
import SigmaToolboxPage from "./pages/SigmaToolboxPage";
import PublicationsPage from "./pages/Publicationspage";

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
        element: <ContractorsPage />,
      },
      {
        path: "/publications",
        element: <PublicationsPage />,
      },
      {
        path: "/hydrolicLabpublications",
        element: <PublicationsPage />,
      },
    ],
  },
]);