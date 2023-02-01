import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "config/firebase";
import { userSignOut } from "state/auth";

const Notification = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorElUser, setAnchorElUser] = useState();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        redirect("/");
      } else {
        redirect("/signin");
      }
    });
  });

  const handleLogout = () => {
    dispatch(userSignOut());
  };

  const handleProfile = () => {
    redirect("profile");
  };

  const settings = [
    { item: "Profile", url: "profile" },
    { item: "Logout", event: handleLogout },
  ];

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
        {settings.map((setting) => (

          <MenuItem key={setting.item}>
            <Link to={setting.url}>
              <Typography textAlign="center" onClick={setting.event}>
                {setting.item}
              </Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Notification;
