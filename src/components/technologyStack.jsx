import { Card, Container, Typography } from "@mui/material";
import { Box, Grid } from "@mui/material";
import React from "react";
import reach from "../assets/reach.png";
import algo from "../assets/algo.png";
import women from "../assets/women.jpg";

const TechStack = () => {
  return (
    <div style={{ minHeight: "60vh" }}>
      <Container>
        <Box sx={{ mb: "50px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            TECHNOLOGIES USED
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item lg={4} xs={12}>
            <Card sx={{ minHeight: "40vh", padding: "10px" }}>
              <img
                style={{ width: "50px", color: "#061121" }}
                src={reach}
                alt=""
              />
              <Typography sx={{ mt: "20px" }} variant="h6">
                Reach
              </Typography>
              <Box sx={{ mt: "20px" }}>
                <Typography variant="p">
                  The Smartest, Fastest, and Safest DApp Programming Language
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Card sx={{ minHeight: "40vh", padding: "10px" }}>
              <img
                style={{ width: "100px", color: "##061121" }}
                src={algo}
                alt=""
              />
              <Typography sx={{ mt: "20px" }} variant="h6">
                Algorand
              </Typography>
              <Box sx={{ mt: "20px" }}>
                <Typography variant="p">
                  Algorand builds technology that accelerates the convergence
                  between decentralized and traditional finance by enabling the
                  simple creation of next-generation financial products,
                  protocols, and exchange of value.
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Card sx={{ minHeight: "40vh", padding: "10px" }}>
              <img
                style={{ width: "100px", color: "##061121" }}
                src={women}
                alt=""
              />
              <Typography sx={{ mt: "20px" }} variant="h6">
                WIBA
              </Typography>
              <Box sx={{ mt: "20px" }}>
                <Typography variant="p">
                  Wiba vision is to create an inclusive new economy with women
                  in Asia as leaders in the blockchain industry and a force for
                  change and social good.
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TechStack;
