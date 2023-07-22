import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Grid, Typography, Avatar } from "@mui/material";
import "./style.css";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      avatarSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      name: "Maria Smantha - Web Developer",
      quote:
        "This place was perfect for my budget. Located on Ngong road in the Adam’s arcade area. This place was convenient for me with close access to transportation and the junction mall. You can not beat the rate if you are on a budget and want to experience Nairobi and are frugal.",
    },
    {
      id: 2,
      avatarSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
      name: "Lisa Cudrow - Graphic Designer",
      quote:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    },
    {
      id: 3,
      avatarSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp",
      name: "John Smith - Marketing Specialist",
      quote:
        "Listen, if you are looking for a long-term place for staying, this is it. Private and quiet, very safe (UN HQ, US embassy, Australia, etc) are 15 minutes away, meaning security in this area is tight. 2 rivers mall is 10 minutes away. Carrefour supermarket, restaurants. I mean, you are sorted. This is the place. And it's way too cheap at first I was doubtful. To be honest, I'm certain to come here again. It's worth more than you pay for. Shops and public transportation are 100m away. Before you book elsewhere, check this one out.",
    },
  ];

  // Settings for the react-slick carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container fluid className="py-5 gradient-custom">
      <Grid container justifyContent="center">
        <Grid item md={12} sx={{ margin: "80px" }}>
          <Slider {...settings}>
            {testimonialData.map((testimonial) => (
              <div key={testimonial.id}>
                <Grid container justifyContent="center">
                  <Grid item lg={10} xl={8}>
                    <Grid container>
                      <Grid
                        item
                        lg={4}
                        className="d-flex justify-content-center"
                      >
                        <Avatar
                          src={testimonial.avatarSrc}
                          alt="woman avatar"
                          sx={{ width: 150, height: 150, boxShadow: 1 }}
                        />
                      </Grid>
                      <Grid
                        item
                        md={9}
                        lg={7}
                        xl={8}
                        className="text-center text-lg-start mx-auto mx-lg-0"
                      >
                        <Typography variant="h4" className="mb-4">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body1" className="mb-0 pb-3">
                          {testimonial.quote}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonial;
