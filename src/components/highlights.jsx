import { Card, Container, Typography } from "@mui/material";
import { Box, Grid } from "@mui/material";
import React from "react";
import Globe from "../assets/globe-solid.svg";
import Paper from "../assets/map-regular.svg";
import Check from "../assets/circle-check-solid.svg";

const Highlights = () => {
  return (
    <div style={{ minHeight: "80vh" }}>
      <Container>
        <Box sx={{ mb: "50px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            WHY USE OWNTRAD?
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item lg={4} xs={12}>
            <Card sx={{ minHeight: "40vh", padding: "10px" }}>
              <img
                style={{ width: "50px", color: "##061121" }}
                src={Globe}
                alt=""
              />
              <Typography sx={{ mt: "20px" }} variant="h6">
                Enjoy freedom with Ownership transition
              </Typography>
              <Box sx={{ mt: "20px" }}>
                <Typography variant="p">
                  Due to the decentralized design of the blockchain, the buyer
                  is free from additional charge for transferring funds abroad
                  and limit that can be transferred. It also free from the
                  bank's control, which requires long, delay waiting time
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Card sx={{ minHeight: "40vh", padding: "10px" }}>
              <img
                style={{ width: "50px", color: "##061121" }}
                src={Paper}
                alt=""
              />
              <Typography sx={{ mt: "20px" }} variant="h6">
                Free from paper work
              </Typography>
              <Box sx={{ mt: "20px" }}>
                <Typography variant="p">
                  The usage of manual, paper-based contracts that are prone to
                  error is still used for trading and shipping. This problem can
                  be solved by smart contracts, which also ease the coordination
                  between numerous stakeholders and harassment-free for the
                  document verification.
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Card sx={{ minHeight: "40vh", padding: "10px" }}>
              <img
                style={{ width: "50px", color: "##061121" }}
                src={Check}
                alt=""
              />
              <Typography sx={{ mt: "20px" }} variant="h6">
                Authenticity and transparency
              </Typography>
              <Box sx={{ mt: "20px" }}>
                <Typography variant="p">
                  Every transaction will be recorded via blockchain, enabling
                  traceability for every process. Since that each product is
                  attached with an ID, it can aid in confirming the authenticity
                  of the product. These IDs could serve as digital certificates
                  that show who owns the product.
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Highlights;
