import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    height: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      height: "500px",
    },
  },
  bannerContent: {
    maxWidth: "800px",
  },
  bannerTitle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    color: "#000",
  },
  bannerSubtitle: {
    marginBottom: theme.spacing(4),
    color: "#000",
  },
  bannerBtn: {
    marginTop: "100px",
  },
}));

export default useStyles;
