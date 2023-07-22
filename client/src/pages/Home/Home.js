import { Box, Grid, Typography } from "@mui/material";
import Banner from "../../components/Banner/Banner";
import AboutUs from "../../components/AboutUs/AboutUs";
import Services from "../../components/Services/Services";
import Properties from "../../components/Properties/Properties";
import ContactUs from "../../components/ContactUs/ContactUs";
import useStyles from "./styles";
import Testimonial from "../../components/Testimonials/Testimonial";

const Home = () => {
  const classes = useStyles();

  const testimonialData = [
    {
      id: 1,
      avatarSrc: "https://via.placeholder.com/100x100",
      name: "John Doe",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ante arcu.",
    },
    {
      id: 2,
      avatarSrc: "https://via.placeholder.com/100x100",
      name: "Jane Smith",
      quote:
        "In eu lacus ac ligula sodales malesuada. Nulla eu libero eget sapien rhoncus ultrices.",
    },
    // Add more testimonial data as needed
  ];

  return (
    <Grid container fixed>
      <Grid item xs={12} className={classes.itemBanner}>
        <div id="section1">
          <Banner />
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightgray",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 5, mt: 5 }}>
            <Typography variant="h4">About Us</Typography>
          </Box>
          <div id="section2">
            <AboutUs />
          </div>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightblue",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 5, mt: 5 }}>
            <Typography variant="h4">Services</Typography>
          </Box>
          <div id="section3">
            <Services />
          </div>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightgreen",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 5, mt: 5 }}>
            <Typography variant="h4">Properties</Typography>
          </Box>
          <div id="section4">
            <Properties />
          </div>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 5, mt: 5 }}>
            <Typography variant="h4">Testimonials</Typography>
          </Box>
          <div id="section5">
            <Testimonial />
          </div>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 5, mt: 5 }}>
            <Typography variant="h4">Contact Us</Typography>
          </Box>
          <div id="section6">
            <ContactUs />
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
