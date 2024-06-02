import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page.jsx";
import MainPage from "./routes/main-page.jsx";
import SignUpPage, { action as signupAction } from "./routes/sing-up.jsx";
import LoginPage, { action as loginAction } from "./routes/login.jsx";
import ActiveDomains, {loader as loaderActiveDomains} from "./routes/activeDomains.jsx";
import DnsRequest, {action as dnsRequestAction} from "./routes/dnsRequest.jsx";
import UserHomePage from "./routes/userHomePage.jsx";
import AboutPage from "./routes/about-page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <MainPage />
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/signup",
        element: <SignUpPage />,
        action: signupAction,
      },
      {
        path: "/login",
        element: <LoginPage />,
        action: loginAction,
      },
      {
        path: "/dns_request",
        element: <DnsRequest />,
        action: dnsRequestAction,
      },
      {
        path: "/active_domains",
        element: <ActiveDomains />,
        loader: loaderActiveDomains,
      },
      {
        path: "/userhome",
        element: <UserHomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
