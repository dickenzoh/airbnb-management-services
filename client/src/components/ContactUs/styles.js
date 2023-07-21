import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
  },
  submitButton: {
    marginTop: "1rem",
  },
}));

export default useStyles;
