import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  testimonial: {
    backgroundColor: theme.palette.secondary.light,
    borderRadius: "8px",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom: "1rem",
  },
  name: {
    fontWeight: "bold",
  },
  quote: {
    fontStyle: "italic",
  },
}));

export default useStyles;
