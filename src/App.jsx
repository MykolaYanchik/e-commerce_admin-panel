import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import Auth from "./pages/Auth/Auth";
import PrivateRoute from "./components/PrivateRoute";
import links from "./utils/links";
import Layout from "./components/Layout/Layout";

import { useRefreshMutation } from "./stores/rtkq/auth";

function App() {
  const title = useSelector(({ common }) => common.title);

  const [refresh]= useRefreshMutation();

  useEffect(() => {
    if(localStorage.getItem("auth")) {
      refresh();
    }
  }, [refresh]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Routes>
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        />
        <Route path={links.signin} element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
