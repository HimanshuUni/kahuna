import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, Outlet, useLocation } from "react-router-dom";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


export default function Library() {
  const location = useLocation();
  const [show, setShow] = React.useState(false);
  const { pathname } = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const libMenuItem = [
    { label: "Trinity", to: "/library/home" },
    { label: "Private Library", to: "/library/private" },
    { label: "Scheduled", to: "/library/scheduleds" },
  ];




  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
          orientation={matches ? "horizontal" : "vertical"}
          sx={{
            width: 1 / 2,
            mx: "auto",
            marginTop: 2,
            // display: { xs: "none", md: "flex" },
            // flexDirection:{xs:'column', md: 'row' }
          }}
          value={location.pathname}
          variant="fullWidth"
        >
          {libMenuItem.map(({ label, to }) => (
            <Tab
              label={label}
              style={{ fontFamily: "monospace" }}
              LinkComponent={Link}
              value={to}
              to={to}
            />
          ))}
        </Tabs>

        {/* <Box
          sx={{
            display: { xs: "flex", md: "none" },
            marginLeft: 2,
          }}
        >
          <IconButton
            size="large"
            id="basic-button"
            aria-controls={show ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={show ? "true" : undefined}
            onClick={() => setShow(true)}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            // anchorEl={anchorEl}
            open={show}
            onClose={() => setShow(false)}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {libMenuItem.map(({ label, to }) => (
              <Link  to={to} style={{textDecoration: 'none', color: pathname.includes(to) ? '#0079ca' :'grey'}}>
                <MenuItem onClick={() => setShow(false)}>{label}</MenuItem>
              </Link>
            ))}
          </Menu>
        </Box> */}
      </Box>
      <Outlet />
    </>
  );
}
