import { Grid } from "@mui/material";
import Banner from "../../components/Banner/Banner";
import AboutUs from "../../components/AboutUs/AboutUs";
import Services from "../../components/Services/Services";
import Properties from "../../components/Properties/Properties";
import ContactUs from "../../components/ContactUs/ContactUs";
import useStyles from "./styles";
import Testimonial from "../../components/Testimonials/Testimonials";
import Test from "../../components/Testimonials/Test";

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
        }}
      >
        <div id="section3">
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
        <div id="section4">
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
        }}
      >
        <div id="section5">
          {/* {testimonialData.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              avatarSrc={testimonial.avatarSrc}
              name={testimonial.name}
              quote={testimonial.quote}
            />
          ))} */}
          Testimonial
          <Test />
        </div>
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
        <div id="section6">
          <ContactUs />
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
