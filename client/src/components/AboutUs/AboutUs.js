import React from "react";
import { Typography, List, ListItem, Grid, Box } from "@mui/material";

const AboutUs = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Typography variant="h2">About Us</Typography>
      <Typography paragraph>
        Welcome to [Your Company Name], Your Partner in Airbnb House Management!
      </Typography>
      <Grid container columnSpacing={2}>
        <Grid Item xs={6}>
          <Typography variant="h3">Who We Are</Typography>
          <Typography paragraph>
            At [Your Company Name], we are a team of dedicated professionals
            passionate about property management and the Airbnb experience. With
            years of experience in the industry, we have honed our skills in
            providing top-notch services to property owners and guests alike.
            Our mission is to help property owners maximize their rental income
            while ensuring guests have a memorable stay.
          </Typography>
        </Grid>
        <Grid Item xs={6}>
          <Typography variant="h3">Our Vision</Typography>
          <Typography paragraph>
            We envision a world where property management is hassle-free and
            enjoyable for property owners, while guests have access to
            outstanding accommodations and experiences. We strive to be the
            go-to Airbnb management solution, providing exceptional services and
            innovative solutions tailored to each property owner's unique needs.
          </Typography>
        </Grid>
      </Grid>
      <Grid container columnSpacing={2}>
        <Grid Item xs={6}>
          <Typography variant="h3">Our Services</Typography>
          <List>
            <ListItem>
              Listing Optimization: We optimize your property listings to
              attract more guests and achieve higher occupancy rates.
            </ListItem>
            <ListItem>
              Dynamic Pricing: Our experts use data-driven pricing strategies to
              ensure competitive rates and maximize your rental income.
            </ListItem>
            <ListItem>
              Guest Communication: We handle all guest inquiries, bookings, and
              communication, providing excellent customer service 24/7.
            </ListItem>
            <ListItem>
              Housekeeping & Maintenance: Our dedicated team ensures your
              property is spotless and well-maintained after each guest's stay.
            </ListItem>
            <ListItem>
              Marketing & Promotion: We implement targeted marketing strategies
              to reach potential guests and drive bookings.
            </ListItem>
            <ListItem>
              Guest Experience: We curate exceptional experiences for guests,
              ensuring they have a memorable stay.
            </ListItem>
          </List>
        </Grid>
        <Grid Item xs={6}>
          <Typography variant="h3">Our Values</Typography>
          <List>
            <ListItem>
              Professionalism: We uphold the highest standards of
              professionalism in all our interactions with clients and guests.
            </ListItem>
            <ListItem>
              Transparency: We believe in open and honest communication, keeping
              our clients informed every step of the way.
            </ListItem>
            <ListItem>
              Trust: We build trust through reliability, accountability, and
              delivering on our promises.
            </ListItem>
            <ListItem>
              Innovation: We stay ahead of the curve with innovative strategies
              and technology to optimize property management.
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid container columnSpacing={2}>
        <Grid Item xs={6}>
          <Typography variant="h3">Meet Our Team</Typography>
          <Box>
            Our team consists of experienced property managers, marketing
            specialists, housekeeping professionals, and guest experience
            coordinators. Each team member is committed to delivering the
            highest level of service, expertise, and dedication to our clients.
          </Box>
        </Grid>

        <Grid Item xs={6}>
          <Typography variant="h3">Our Commitment</Typography>
          <Typography paragraph>
            At [Your Company Name], we are dedicated to providing exceptional
            service and support to our clients. We treat each property as if it
            were our own, ensuring it is well cared for and generates maximum
            returns. With our expertise and personalized approach, you can rest
            assured that your Airbnb property is in good hands.
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h3">Contact Us</Typography>
      <Typography paragraph>
        We look forward to partnering with you to elevate your Airbnb property
        management experience. Contact us today to learn more about our services
        and how we can help you achieve success in the short-term rental market.
      </Typography>
    </div>
  );
};

export default AboutUs;
