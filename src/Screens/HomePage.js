import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "../Components/Footer";
import Grid from "@material-ui/core/Grid";
import Header from "../Components/Header";
import Photo from "../Components/Photo";
import React from "react";
import Sidebar from "../Components/Sidebar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  margin: {
    marginLeft: theme.spacing(10),
    width: "100%",
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    maxHeight: 600,
  },
  submit: {
    flexDirection: "row",
    justifyContent: "around-space",
    display: "flex",
    marginRight: theme.spacing(5),
  },
}));

const sections = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "/aboutus" },
  { title: "ProfileUser", url: "/profileuser" },
  { title: "Appointment", url: "/appointment" },
];

const photo = {
  image: "https://www.diabetes.co.uk/wp-content/uploads/2019/01/iStock-10131071761-1.jpg",
};

const sidebar = {
  title: "About",
  description:
    "We are a group of students that have the determination to help people around Puerto Rico, which can find any doctor specialist you need at the moment.",
};

export default function HomePage() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header
          title="Doctor Appointment"
          sections={sections}
        />
        <Photo post={photo} />
        <Grid container spacing={5} className={classes.mainGrid}>
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
          />
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}