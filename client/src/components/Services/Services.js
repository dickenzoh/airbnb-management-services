import React from "react";
import { Typography } from "@mui/material";
import useStyles from "./styles.js";

const Services = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Typography variant="h1">Airbnb Management Services</Typography>
      </header>
      <main className={classes.servicesGrid}>
        <section className={classes.serviceSection}>
          <Typography variant="h4" className={classes.serviceTitle}>
            Listing Optimization
          </Typography>
          <Typography paragraph>
            We optimize your property listings to attract more guests and
            achieve higher occupancy rates.
          </Typography>
        </section>
        <section className={classes.serviceSection}>
          <Typography variant="h4" className={classes.serviceTitle}>
            Dynamic Pricing
          </Typography>
          <Typography paragraph>
            Our experts use data-driven pricing strategies to ensure competitive
            rates and maximize your rental income.
          </Typography>
        </section>
        {/* Add the other service sections similarly */}
      </main>
      <footer className={classes.footer}>
        <Typography variant="body1">
          Contact us today to learn more about our services and how we can help
          you achieve success in the short-term rental market.
        </Typography>
      </footer>
    </div>
  );
};

export default Services;
