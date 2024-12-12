import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";

import Home from "./page/Home";
import { appConfig } from "./config";
import MainLayout from "./layout";
import TransactionDetail from "./page/transactionDetail";

const authenticatedRouter = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/transactiondetail/:transactionID",
        element: <TransactionDetail />,
      },
    ],
  },
  { path: "*", element: <Navigate to="/" replace={true} /> },
]);

function AuthenticatedRouteProvider() {
  return <RouterProvider router={authenticatedRouter} />;
}

function AppRouter() {
  return <AuthenticatedRouteProvider />;
}

function App() {
  return (
    <>
      <Helmet>
        <title>{appConfig.appTitle}</title>
      </Helmet>
      <Global
        styles={css({
          ...emotionReset,
        })}
      />
      <AppRouter />
    </>
  );
}

export default App;
