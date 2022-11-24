import { Box, Grid } from "@mui/material";
import React from "react";
import Logo from "../assets/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Nav = () => {
  return (
    <div>
      <Grid container justifyContent="flex-end">
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              minHeight: "10vh",
            }}
          >
            <img className="logo" src={Logo} alt="" />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              minHeight: "10vh",
              textDecoration: "none",
            }}
          >
            <a
              href="https://www.facebook.com/profile.php?id=100087768564455&mibextid=ZbWKwL"
              style={{ color: "inherit" }}
            >
              <FacebookIcon sx={{ cursor: "pointer" }} className="svg_icons" />
            </a>
            <a
              href="https://www.instagram.com/owntrad/"
              style={{ color: "inherit" }}
            >
              <InstagramIcon className="svg_icons"></InstagramIcon>
            </a>
            <a
              href="https://www.linkedin.com/in/owntrad-utm-965237258/"
              style={{ color: "inherit" }}
            >
              <LinkedInIcon className="svg_icons"></LinkedInIcon>
            </a>
            <a href="https://twitter.com/owntrad_" style={{ color: "inherit" }}>
              <TwitterIcon className="svg_icons"></TwitterIcon>
            </a>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Nav;
