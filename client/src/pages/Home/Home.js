import { Grid } from "@mui/material";
import Banner from "../../components/Banner/Banner";
import AboutUs from "../../components/AboutUs/AboutUs";
import Testimonials from "../../components/Testimonials/Testimonials";
import Services from "../../components/Services/Services";
import Properties from "../../components/Properties/Properties";
import Contact from "../../components/Contact/Contact";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container fixed className={classes.container}>
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
        <div id="section2">
          <AboutUs />
        </div>
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
        <div id="section3" style={{ background: "lightpink" }}>
          Services
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightgreen",
          height: "500px",
        }}
      >
        <div id="section4" style={{ background: "lightpink" }}>
          Section 4
          <Properties />
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightpink",
          height: "500px",
        }}
      >
        <div id="section5" style={{ background: "lightpink" }}>
          Section 5
          <Testimonials />
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightgreen",
          height: "500px",
        }}
      >
        <div id="section6" style={{ background: "lightpink" }}>
          Section 6
          <Contact />
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
