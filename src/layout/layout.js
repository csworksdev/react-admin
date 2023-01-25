import { useState } from "react";
import { AppBar } from "components/layout";

const Layout = ({ children }) => {
  const drawerWidth = 240;
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return <>{children}</>;
};

export default Layout;
