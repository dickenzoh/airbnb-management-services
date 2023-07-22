import React from "react";
import { Typography, Card, CardMedia, CardContent, Grid } from "@mui/material";
import useStyles from "./styles";

const propertiesData = [
  {
    id: 1,
    name: "Cozy Cottage",
    location: "City Center",
    description: "Modern 2br @Kilimani w/kingbed,self check-in,Wi-Fi.",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-557833415421095061/original/df88ec6b-6378-4d19-bdb5-e0fb6db346ac.jpeg?im_w=960",
  },
  {
    id: 2,
    name: "Luxury Villa",
    location: "Kiambu",
    description: "Luxury apt w/amazing sunset view+24hrs supermarket.",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-878714727168941653/original/7036cdb8-060c-43ba-a3b8-2637e29a91bc.jpeg?im_w=960",
  },
  {
    id: 3,
    name: "Luxury Villa",
    location: "Ruaka",
    description: "Unique spacious apt near United Nations Nairobi.",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-766465008708596267/original/55a403bb-2662-4375-b4c9-96faf11b4d39.jpeg?im_w=960",
  },
  {
    id: 1,
    name: "Cozy Cottage",
    location: "City Center",
    description: "Modern 2br @Kilimani w/kingbed,self check-in,Wi-Fi.",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-557833415421095061/original/df88ec6b-6378-4d19-bdb5-e0fb6db346ac.jpeg?im_w=960",
  },
  {
    id: 2,
    name: "Luxury Villa",
    location: "Kiambu",
    description: "Luxury apt w/amazing sunset view+24hrs supermarket.",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-878714727168941653/original/7036cdb8-060c-43ba-a3b8-2637e29a91bc.jpeg?im_w=960",
  },
  {
    id: 3,
    name: "Luxury Villa",
    location: "Ruaka",
    description: "Unique spacious apt near United Nations Nairobi.",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-766465008708596267/original/55a403bb-2662-4375-b4c9-96faf11b4d39.jpeg?im_w=960",
  },
];

const Properties = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3">Properties we are managing.</Typography>
      <Grid container justifyContent="center">
        {propertiesData.map((property) => (
          <Grid item key={property.id}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={property.image}
                title={property.name}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {property.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {property.location}
                </Typography>
                <Typography variant="body2" component="p">
                  {property.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Properties;
