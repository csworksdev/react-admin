import { Container } from "@mui/material";
import DeleteAccount from "components/user/deleteAccount";
import React from "react";

const Profile = () => {
  return (
    <Container component={"main"} maxWidth="xxl" sx={{ height: "100vh" }}>
      <DeleteAccount />
    </Container>
  );
};

export default Profile;
