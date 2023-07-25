import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    padding: theme.spacing(3),
    backgroundColor: "#f9f9f9",
  },
  serviceItem: {
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  price: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  description: {
    marginBottom: theme.spacing(2),
  },
  contactInfo: {
    marginTop: theme.spacing(3),
    fontSize: "1.1rem",
    fontWeight: "bold",
  },
}));

export default useStyles;
