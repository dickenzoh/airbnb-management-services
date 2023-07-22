import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    paddingBottom: "2rem",
  },
  card: {
    maxWidth: 300,
    margin: "1rem",
  },
  media: {
    height: 200,
  },
}));

export default useStyles;
