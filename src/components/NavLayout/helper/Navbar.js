import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { blue } from "@mui/material/colors";
import LeftDrawer from "./LeftDrawer";
import ProfileView from "./ProfileView";
import LibraryBooks from "@mui/icons-material/LibraryBooks";
import SummarizeIcon from "@mui/icons-material/Summarize";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import { useLocation } from "react-router-dom";
const pages = [
  { title: "Library", to: "/library", icon: <LibraryBooks /> },
  { title: "Report", to: "/reports", icon: <SummarizeIcon /> },
  { title: "Inbox", to: "/inbox", icon: <MoveToInboxIcon /> },
];

const Navbar = () => {
  const [showLeftDrawer, setShowLeftDrawer] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const { pathname } = useLocation();
  const handleChange = (event, newValue) => {
    console.log(event, newValue);
    setValue(newValue);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "white", borderBottom: 1, borderColor: "divider" }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" }, color: "gray" }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setShowLeftDrawer(true)}
              style={{color:'grey'}}
            >
              <MenuIcon />
            </IconButton>
            <LeftDrawer
              setShowLeftDrawer={setShowLeftDrawer}
              showLeftDrawer={showLeftDrawer}
              pages={pages}
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                style: {
                  display: "none",
                },
              }}
            >
              {pages.map((page) => (
                <Tab
                  style={{
                    color: pathname.includes(page.to) ? "#0079ca" : "grey",
                    textTransform: "capitalize",
                    fontFamily: "monospace",
                    fontSize: "x-large",
                  }}
                  value={page.to}
                  label={page.title}
                  to={page.to}
                  component={Link}
                />
              ))}
            </Tabs>
          </Box>
          <ProfileView />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
