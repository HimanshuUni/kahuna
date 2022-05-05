import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import LogoutIcon from "@mui/icons-material/Logout";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Link } from "react-router-dom";
import AddOrganization from "../../Modal/AddOrganization";
const ProfileView = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const settings = [
    {
      title: "My Profile",
      Icon: PermIdentityIcon,
      to: "/users/me/manage/profile",
    },
    {
      title: "User Guide",
      Icon: InfoOutlinedIcon,
      to: "/users/me/manage/profile",
    },
    {
      title: "Contact Support",
      Icon: SupportAgentIcon,
      to: "/users/me/manage/profile",
    },
    { title: "Logout", Icon: LogoutIcon, to: "/users/me/manage/profile" },
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem style={{ justifyContent: "center" }}>
          <Typography fontSize={"small"} textAlign="center">
            himanshulohani559536@gmail.com
          </Typography>
        </MenuItem>

        <MenuItem
          style={{
            backgroundColor: "#edfcfb",
            padding: 16,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex" }}>
            <Typography textAlign="center" style={{ color: "#5ecbf2" }}>
              himanshulohani559536...
            </Typography>
          </div>
          <List style={{ display: "flex" }} onClick={handleCloseUserMenu}>
            <ListItem
              disablePadding
              button
              component={Link}
              to="/organizations/manage/settings"
            >
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Setting" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              button
              component={Link}
              to="/organizations/manage/users"
            >
              <ListItemButton>
                <ListItemIcon>
                  <PersonAddAltIcon />
                </ListItemIcon>
                <ListItemText primary="Invite" />
              </ListItemButton>
            </ListItem>
          </List>
        </MenuItem>
        <MenuItem>
          <List onClick={handleCloseUserMenu}>
            <ListItem disablePadding onClick={() => setOpen(true)}>
              <ListItemButton>
                <ListItemIcon>
                  <CorporateFareIcon fontSize="medium" />
                </ListItemIcon>
                <ListItemText primary={"Add New Organization"} />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              button
              component={Link}
              to='/users/me/manage/organizations'
            >
              <ListItemButton>
              <ListItemIcon>
                  <AccountTreeOutlinedIcon fontSize="medium" />
                </ListItemIcon>
                <ListItemText primary={"Manage Organization (1)"} />
              </ListItemButton>
            </ListItem>

          </List>
        </MenuItem>
        <Divider />
        <MenuItem>
          <List onClick={handleCloseUserMenu}>
            {settings.map(({ title, Icon, to }, idx) => (
              <ListItem disablePadding button component={Link} to={to}>
                <ListItemButton>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </MenuItem>
      </Menu>
      <AddOrganization open={open} setOpen={setOpen} />
    </Box>
  );
};

export default ProfileView;
