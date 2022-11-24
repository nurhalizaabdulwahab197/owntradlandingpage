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
            OWNTRAD
          </Typography>
        </Grid>
        <Grid item xs="12">
          <Typography variant="h5">
            Buy and Sell your Product Wherever, Whenever!
          </Typography>
        </Grid>
        <Grid item xs="12">
          <a href="http://localhost:3001/">
            <button className="jumboButton2">PROCEED</button>
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Jumbo;
