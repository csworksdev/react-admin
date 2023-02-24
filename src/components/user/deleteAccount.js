import { Button } from "@mui/material";
import React from "react";
import { DeleteForever } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { userDeleteAccount } from "state/profile";

function DeleteAccount() {
  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    dispatch(userDeleteAccount);
  };

  return (
    <div className="my-2">
      <h2>Delete Account</h2>
      <hr />
      <Button
        variant="contained"
        color="error"
        startIcon={<DeleteForever />}
        onClick={handleDeleteUser}
      >
        Delete
      </Button>
    </div>
  );
}

export default DeleteAccount;
