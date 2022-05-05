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

export default function Users() {
  const location = useLocation();
  const [val, setVal] = React.useState(1);

  return (
    // <Box sx={{ width: 1 / 2, mx: "auto", bgcolor: "background.paper" }}>
    <>
      <Divider />
      <Tabs sx={{paddingY: 1}} value={location.pathname} variant="fullWidth">
        <Stack
          direction={"row"}
          sx={{ width: 1, justifyContent: "space-around" }}
        >
          <Stack direction="row" spacing={2}>
            <Tab label={"Inbox(1)"} />
            <Tab label={"Upcoming"} />
          </Stack>
          <Stack direction="row" spacing={2}>
            <TextField
              id="outlined-basic"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              size="small"
              variant="outlined"
            />
            <FormControl size={"small"}>
              <Select
                value={val}
                onChange={(e) => setVal(e.target.value)}
              >
                <MenuItem value={1}>All</MenuItem>
                <MenuItem value={2}>Approvals</MenuItem>
                <MenuItem value={3}>Tasks</MenuItem>
                <MenuItem value={4}>Runs</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
      </Tabs>
      <Divider />
    </>
    //   <Outlet />
    // </Box>
  );
}
