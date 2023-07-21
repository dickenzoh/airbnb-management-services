import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "500px",
  },
  itemBanner: {
    backgroundImage:
      'url("https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  bannerContent: {
    maxWidth: "800px",
  },
  bannerTitle: {
    fontWeight: "bold",
    // marginBottom: theme.spacing(2),
    color: "#000",
  },
  bannerSubtitle: {
    //marginBottom: theme.spacing(4),
    color: "#000",
  },
}));

export default useStyles;
