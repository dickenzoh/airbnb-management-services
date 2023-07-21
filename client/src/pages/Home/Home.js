import { Grid } from "@mui/material";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import Testimonials from "../../components/Testimonials/Testimonials";
import Services from "../../components/Services/Services";
import Properties from "../../components/Properties/Properties";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightblue",
          height: "500px",
        }}
      >
        <div id="section1" style={{ background: "lightpink" }}>
          Home Section
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
          height: "500px",
        }}
      >
        <div id="section2" style={{ background: "lightpink" }}>
          About Us
          <About />
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
          height: "500px",
        }}
      >
        <div id="section3" style={{ background: "lightpink" }}>
          Section 3
          <Services />
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
