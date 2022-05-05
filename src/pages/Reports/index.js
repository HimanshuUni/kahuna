import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled, alpha } from "@mui/material/styles";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Divider,
  FormControl,
  Input,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

export default function Reports() {
  const location = useLocation();
  const [val, setVal] = React.useState(1);

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider", marginTop: 3 }}>
        <Tabs
          sx={{ mx: "auto", width: 2 / 3 }}
          value={location.pathname}
          variant="fullWidth"
        >
          <Tab
            label={"Active Workflow Runs"}
            LinkComponent={Link}
            value={"/reports/saved-views/1"}
            to="/reports/saved-views/1"
          />
          <Tab
            label={"Assigned to Me"}
            LinkComponent={Link}
            value={"/reports/saved-views/2"}
            to="/reports/saved-views/2"
          />
          <Tab
            label={"Overdue"}
            LinkComponent={Link}
            value={"/reports/saved-views/3"}
            to="/reports/saved-views/3"
          />
          <Tab
            label={"Recently Completed"}
            LinkComponent={Link}
            value={"/reports/saved-views/4"}
            to="/reports/saved-views/4"
          />
        </Tabs>
      </Box>
      <Outlet />
    </>
  );
}
