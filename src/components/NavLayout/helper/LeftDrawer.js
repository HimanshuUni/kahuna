import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link as RouterLink } from "react-router-dom";
import { ListItemIcon } from "@mui/material";

const LeftDrawer = ({ showLeftDrawer, setShowLeftDrawer, pages }) => {
  const CustomList = ({ to, title , icon}) => {
    const customLink = React.useMemo(
      () =>
        React.forwardRef(function Link(itemProps, ref) {
          return (
            <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />
          );
        }),
      [to]
    );
    return (
      <ListItem button component={customLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    );
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setShowLeftDrawer(false)}
      onKeyDown={() => setShowLeftDrawer(false)}
    >
      <List>
        {pages.map(({ to, title, icon }, index) => (
          <CustomList to={to} title={title} icon={icon}/>
        ))}
      </List>
    </Box>
  );

  return (
        <Drawer
          anchor="left"
          open={showLeftDrawer}
          onClose={() => setShowLeftDrawer(false)}
        >
          {list()}
        </Drawer>
  );
};

export default LeftDrawer;
