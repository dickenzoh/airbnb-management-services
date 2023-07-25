import React from "react";
import { Button, Typography, Container, Grid } from "@mui/material";
import useStyles from "./styles";
import { Link as ScrollLink } from "react-scroll";

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.bannerContainer}>
      <Container className={classes.bannerContent}>
        <Typography variant="h3" className={classes.bannerTitle}>
          Welcome to Luxe Global Management
        </Typography>
        <Typography variant="h6" className={classes.bannerSubtitle}>
          Your Partner in Airbnb House Management
        </Typography>
        <Grid
          container
          justifyContent="center"
          spacing={2}
          className={classes.bannerBtn}
        >
          <Grid item>
            <ScrollLink
              to="section3"
              smooth={true}
              duration={500}
              offset={-350}
            >
              <Button variant="contained" color="primary">
                Explore Our Services
              </Button>
            </ScrollLink>
          </Grid>
          <Grid item>
            <ScrollLink
              to="section6"
              smooth={true}
              duration={500}
              offset={-350}
            >
              <Button variant="contained" color="primary">
                Contact Us
              </Button>
            </ScrollLink>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
