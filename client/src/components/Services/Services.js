import React from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    display: "grid",
    gridGap: theme.spacing(2),
    backgroundColor: "#f9f9f9",
    padding: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 200,
    borderRadius: theme.spacing(2),
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease",
    "&:hover": {
      boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
    },
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  price: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
  description: {
    marginBottom: theme.spacing(2),
  },
  contactInfo: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginTop: "auto",
    color: theme.palette.primary.dark,
  },
}));

const AirbnbConsultingServices = () => {
  const classes = useStyles();

  return (
    <div className={classes.sectionContainer}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>
            Airbnb Setup and Staging
          </Typography>
          <Typography className={classes.price}>Price: Ksh. 10,000</Typography>
          <Typography className={classes.description}>
            Get your Airbnb property off to a great start with our comprehensive
            setup, staging, decorating, and design services. We'll ensure your
            space is appealing and attractive to potential guests, increasing
            your booking rates and revenue.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>
            Airbnb Business Consultation
          </Typography>
          <Typography className={classes.price}>Price: Ksh. 5,000</Typography>
          <Typography className={classes.description}>
            If you lack experience as an Airbnb host but are eager to succeed,
            our Airbnb business consultation is tailored for you. Avoid costly
            beginner mistakes and gain valuable insights from experienced
            consultants, setting your Airbnb venture up for long-term success.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>
            Property Management and Hosting
          </Typography>
          <Typography className={classes.price}>
            20% commission on bookings
          </Typography>
          <Typography className={classes.description}>
            Running an Airbnb property demands constant attention and effort.
            Let us handle the day-to-day responsibilities, including guest
            communications, cleaning, maintenance, and listing updates. Our
            experienced managers will alleviate your stress while ensuring your
            property performs at its best.
          </Typography>
        </CardContent>
      </Card>

      <div className={classes.card}>
        <CardContent>
          <Typography className={classes.contactInfo}>
            Contact Us:
            <div>Phone: 0718627917</div>
            <div>Email: your@emailaddress.com</div>
          </Typography>
        </CardContent>
      </div>
    </div>
  );
};

export default AirbnbConsultingServices;
