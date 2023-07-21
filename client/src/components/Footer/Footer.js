import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Grid container justifyContent="center">
          <Typography variant="body2" color="inherit">
            Your Footer Content
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
