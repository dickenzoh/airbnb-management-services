import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "1rem 0",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "2rem",
    padding: "2rem",
  },
  serviceSection: {
    border: "1px solid #ccc",
    padding: "1.5rem",
    borderRadius: "5px",
  },
  footer: {
    backgroundColor: "#f2f2f2",
    textAlign: "center",
    padding: "1rem",
  },
}));

export default useStyles;
