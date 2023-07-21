import React from "react";
import { Button, Typography, Container, Grid } from "@mui/material";
import useStyles from "./styles";

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.bannerContainer}>
      <Container className={classes.bannerContent}>
        <Typography variant="h3" className={classes.bannerTitle}>
          Welcome to Airbnb services
        </Typography>
        <Typography variant="h6" className={classes.bannerSubtitle}>
          Your Partner in Airbnb House Management
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary">
              Explore Our Properties
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Learn More About Us
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
