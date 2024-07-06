import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

// display user data
const DisplayData = () => {
  const { email, password } = useSelector((state) => state.user);

  return (
    <div>
      DisplayData
      <Typography variant='h5'>Your email is:{email}</Typography>
      <Typography variant='h5'>Your Password is:{password}</Typography>
    </div>
  );
};

export default DisplayData;
