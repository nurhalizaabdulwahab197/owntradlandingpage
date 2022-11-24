import { Box } from "@mui/system";
import React from "react";
import { Card, Container, Typography } from "@mui/material";
import UTM from "../assets/UTM.png";

const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#061121",
          minHeight: "20vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="p" sx={{ color: "white" }}>
          Copyright© 2022 OWNTRAD. All rights reserved.
        </Typography>
        <img src={UTM} style={{ width: "200px", marginTop: "20px" }} alt="" />
      </Box>
    </div>
  );
};

export default Footer;
