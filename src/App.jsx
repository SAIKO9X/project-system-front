import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { NavBar } from "./pages/NavBar/NavBar";
import { ProjectDetails } from "./pages/ProjectDetails/ProjectDetails";
import { IssueDetails } from "./pages/IssueDetails/IssueDetails";
import { Subscription } from "./pages/Subscription/Subscription";
import { Auth } from "./pages/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./Redux/Auth/Action";
import { fetchProjects } from "./Redux/Project/Action";
import { UpgradeSuccess } from "./pages/Subscription/UpgradeSuccess";
import { AcceptInvitation } from "./pages/ProjectDetails/AcceptInvitation";

export const App = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      dispatch(getUser());
      dispatch(fetchProjects({}));
    }
  }, [dispatch]);

  console.log(auth);

  return (
    <>
      {auth.user ? (
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route
              path="/project/:projectId/issue/:issueId"
              element={<IssueDetails />}
            />
            <Route path="/upgrade_plan" element={<Subscription />} />
            <Route path="/upgrade_plan/success" element={<UpgradeSuccess />} />
            <Route path="/accept_invitation" element={<AcceptInvitation />} />
          </Routes>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
};
