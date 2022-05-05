import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, Outlet, useLocation } from "react-router-dom";
export default function Users() {
  const location = useLocation();
  const settings = [
    { label: "Profile", to: "/users/me/manage/profile" },
    { label: "Notifications", to: "/users/me/manage/notifications" },
    { label: "Groups", to: "/users/me/manage/groups" },
    { label: "Activity", to: "/users/me/manage/activity" },
    { label: "Organizations", to: "/users/me/manage/organizations" },
  ];

  return (
    <Box sx={{ width: 1 / 2, mx: "auto", bgcolor: "background.paper" }}>
      <h4 style={{ textAlign: "center" }}>Himanshu Kumar</h4>
      <h6 style={{ textAlign: "center" }}>
        Admin of himanshulohani559536's Organization
      </h6>
      <Tabs value={location.pathname} variant="fullWidth">
        {settings.map(({ label, to }) => (
          <Tab label={label} to={to} value={to} component={Link} />
        ))}
      </Tabs>
      <Outlet />
    </Box>
  );
}
