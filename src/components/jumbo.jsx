import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const Jumbo = () => {
  return (
    <div className="jumbo">
      <Grid container>
        <Grid item xs="12">
          <Typography variant="h4" fontWeight="bold">
            OwnTrad
          </Typography>
        </Grid>
        <Grid item xs="12">
          <Typography variant="h5">
            Buy and Sell your Product Wherever, Whenever!
          </Typography>
        </Grid>
        <Grid item xs="12">
          <button className="jumboButton1">Login</button>
          <button className="jumboButton2">Sign Up</button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Jumbo;
