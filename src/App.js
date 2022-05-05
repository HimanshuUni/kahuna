import * as React from "react";
import Box from "@mui/material/Box";
import { Route, Routes, Navigate } from "react-router-dom";
import Library from "./pages/Library";
import Reports from "./pages/Reports";
import Inbox from "./pages/Inbox";
import NavLayout from "./components/NavLayout";
import Organizations from "./pages/Organizations";
import Activity from "./pages/Organizations/helper/Activity";
import Billings from "./pages/Organizations/helper/Billings";
import { Groups } from "@mui/icons-material";
import Integrations from "./pages/Organizations/helper/Integrations";
import Settings from "./pages/Organizations/helper/Settings";
import Members from "./pages/Organizations/helper/Members";
import Users from "./pages/Users";
import Profile from "./pages/Users/helper/Profile";
import Notifications from "./pages/Users/helper/Notifications";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Forgot from "./pages/Forgot";
import PvtLib from "./pages/Library/Pages/PvtLib";
import Scheduled from "./pages/Library/Pages/Scheduled";
import OrgName from "./pages/Library/Pages/OrgName";
import ActiveWorkFlow from "./pages/Reports/Pages/ActiveWorkFlow";
import AssignedToMe from "./pages/Reports/Pages/AssignedToMe";
import Overdue from "./pages/Reports/Pages/Overdue";
import RecentlyCompleted from "./pages/Reports/Pages/RecentlyCompleted";
const App = () => {
  const [login, setLogin] = React.useState(true);
  return (
    <>
      {!login ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<Forgot />} />
        </Routes>
      ) : (
        <NavLayout>
          <Box sx={{ width: "100%" }}>
            <Routes>
              <Route path="/" element={<Navigate replace to="/reports" />} />

              <Route
                path="/library"
                element={<Navigate replace to="/library/home" />}
              />
              <Route element={<Library />}>
                <Route path="/library/home" element={<OrgName />} />
                <Route path="/library/private" element={<PvtLib />} />
                <Route path="/library/scheduleds" element={<Scheduled />} />
              </Route>

              <Route
                path="/reports"
                element={<Navigate replace to="/reports/saved-views/1" />}
              />
              <Route element={<Reports />}>
                <Route path="/reports/saved-views/1" element={<ActiveWorkFlow />} />
                <Route path="/reports/saved-views/2" element={<AssignedToMe />} />
                <Route path="/reports/saved-views/3" element={<Overdue />} />
                <Route path="/reports/saved-views/4" element={<RecentlyCompleted />} />
              </Route>

              <Route path="/inbox" element={<Inbox />} />

              <Route
                path="/organizations/manage"
                element={
                  <Navigate replace to="/organizations/manage/settings" />
                }
              />
              <Route element={<Organizations />}>
                <Route
                  path="/organizations/manage/activity"
                  element={<Activity />}
                />
                <Route
                  path="/organizations/manage/billing"
                  element={<Billings />}
                />
                <Route
                  path="/organizations/manage/groups"
                  element={<Groups />}
                />
                <Route
                  path="/organizations/manage/integrations"
                  element={<Integrations />}
                />
                <Route
                  path="/organizations/manage/settings"
                  element={<Settings />}
                />
                <Route
                  path="/organizations/manage/users"
                  element={<Members />}
                />
              </Route>

              <Route element={<Users />}>
                <Route path="/users/me/manage/profile" element={<Profile />} />
                <Route
                  path="/users/me/manage/activity"
                  element={<Activity />}
                />
                <Route path="/users/me/manage/groups" element={<Groups />} />
                <Route
                  path="/users/me/manage/notifications"
                  element={<Notifications />}
                />
                <Route
                  path="/users/me/manage/organizations"
                  element={<Notifications />}
                />
                <Route path="/users/me/manage/profile" element={<Profile />} />
              </Route>
            </Routes>
          </Box>
        </NavLayout>
      )}
    </>
  );
};
export default App;
