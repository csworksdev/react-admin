import { Button } from "@mui/material";
import React from "react";
import { DeleteForever } from "@mui/icons-material";

function DeleteAccount() {
    
  return (
    <div className="my-2">
      <h2>Delete Account</h2>
      <hr />
      <Button variant="contained" color="error" startIcon={<DeleteForever />}>
        Delete
      </Button>
    </div>
  );
}

export default DeleteAccount;
