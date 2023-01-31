import { Avatar, Box, Container, Typography } from "@mui/material";
import { getAuth } from "firebase/auth";
import React, { useState } from "react";

const ProfileCard = ({ open }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [profileName, setProfileName] = useState("");
  if (user !== null) {
    setProfileName(user.displayName);
  }

  return (
    <Box sx={{ display: open ? "block" : "none" }}>
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {/* <Avatar
          alt={profileName}
          src="assets/avatar.png"
          sx={{ width: 150, height: 150 }}
        /> */}
        <Typography gutterBottom variant="h5" component="div">
          {/* Hi, {{ currentUser }} */}
          {/* Hi {profileName && "demo"} */}
        </Typography>
      </Container>
    </Box>
  );
};

export default ProfileCard;
