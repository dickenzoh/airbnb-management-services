import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Link,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "auto",
    color: theme.palette.common.white,
    padding: theme.spacing(2),
  },
  footerLink: {
    color: theme.palette.common.white,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#000" }}
      className={classes.footer}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Luxe Global Management
            </Typography>
            <Typography variant="body1">
              Welcome to Luxe Global Management, Your Partner in Airbnb House
              Management!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" className={classes.footerLink}>
              Home
            </Link>
            <br />
            <Link href="#" className={classes.footerLink}>
              About Us
            </Link>
            <br />
            <Link href="#" className={classes.footerLink}>
              Services
            </Link>
            <br />
            <Link href="#" className={classes.footerLink}>
              Contact Us
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body1">
              Address: 123 Street, City, Country
              <br />
              Email: contact@example.com
              <br />
              Phone: 0718627917
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Footer;
