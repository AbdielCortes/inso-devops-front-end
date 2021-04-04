import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const themeLight = createMuiTheme({
  palette: {},
});
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(9),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#cfe8fc",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  small: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  header: {
    marginBottom: theme.spacing(5),
  },
  body: {
    marginBottom: theme.spacing(5),
    marginLeft: theme.spacing(25),
    marginRight: theme.spacing(25),
  },
}));

const sections = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "/aboutus" },
  { title: "ProfileUser", url: "/profileuser" },
  { title: "Appointment", url: "/appointment" },
];

export default function AboutUs() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <MuiThemeProvider theme={themeLight}>
          <Header title="About Us" sections={sections} />
          <CssBaseline />
          <div className={classes.paper}>
            <Typography variant="h5" component="div" className={classes.header}>
              Who are we?
            </Typography>
            <Typography
              variant="body1"
              paragraph={true}
              className={classes.body}
            >
              Currently, all of us are studying in the University of Puerto Rico
              in Mayaguez. We are a team of 9 members who are still learning and
              improving in the software and computer area that are working hard
              for our future.
            </Typography>

          </div>
        </MuiThemeProvider>
      </Container>
      <Footer />
    </React.Fragment>
  );
}