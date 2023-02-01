import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ResponsiveAppBar, Sidebar } from "components/layout";
import { styled, useTheme } from "@mui/material/styles";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "config/firebase";
import ProtectedRoute from "config/routes/protected";

const Layout = () => {
  const drawerWidth = 240;
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <ResponsiveAppBar
        drawerWidth={drawerWidth}
        handleDrawerOpen={handleDrawerOpen}
        open={open}
      />
      <Sidebar
        drawerWidth={drawerWidth}
        handleDrawerClose={handleDrawerClose}
        theme={theme}
        open={open}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <ProtectedRoute />
      </Box>
    </Box>
  );
};

export default Layout;
