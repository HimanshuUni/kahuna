import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, Outlet, useLocation } from "react-router-dom";
export default function Organizations() {
  const location = useLocation();
  const settings = [
    { label: "Members & Guests", to: "/organizations/manage/users" },
    { label: "Groups", to: "/organizations/manage/groups" },
    { label: "Settings", to: "/organizations/manage/settings" },
    { label: "Integrations", to: "/organizations/manage/integrations" },
    { label: "Activity", to: "/organizations/manage/activity" },
    { label: "Billings", to: "/organizations/manage/billing" },
  ];

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <h4 style={{ textAlign: "center" }}>
        himanshulohani559536's Organization
      </h4>
      <Tabs value={location.pathname} centered>
        {settings.map(({ label, to }) => (
          <Tab label={label} to={to} value={to} component={Link} />
        ))}
      </Tabs>
      <Outlet />
    </Box>
  );
}
