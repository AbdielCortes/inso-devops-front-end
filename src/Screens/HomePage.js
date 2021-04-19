import React, {useCallback, useEffect, useState} from "react";

import Autocomplete from "@material-ui/lab/Autocomplete";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "../Components/Footer";
import Grid from "@material-ui/core/Grid";
import Header from "../Components/Header";
import { Input } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Photo from "../Components/Photo";
import Sidebar from "../Components/Sidebar";
import TextField from "@material-ui/core/TextField";
import {doctorData} from '../dummydata';
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
  {title:   "PatientP",   url: "/patientp"},
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

  const [doctor, setDoctor] = useState('');
  const [filter, setFilter] = useState("");
  const [q, setQ] = useState("");
  const [doctorNames, setDoctorNames] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredName, setFilteredName] = useState("");

  // const getDoc = useCallback(() => {
  //   console.log("getDoc const testing: " + doctorData.map(item => {
  //     for (var i = 0; i < doctorData.length; i++) {
  //       console.log("doctor name pushed: " + item);
  //       setDoctorNames(item)
  //     }
  //   }));
  //   setDoctors(doctorData);
  // }, []);

  // useEffect(() => {
  //   getDoc();
  //   console.log("fetching dummy data:" + doctorData);
  // },[getDoc]);

  // useEffect(() => {
  //   console.log("fetching dummy data:" + doctors);
  // }, [doctors]);

  // useEffect(() => {
  //   console.log("doctorsData dummy names:" + doctorData.map((data, key) => {
  //     return (
  //       <div key={key}>
  //         {data.doctor_id +
  //         ", " +
  //         data.doctor_firstname +
  //         ", " + 
  //         data.doctor_lastname +
  //         ", " +
  //         data.doctor_specialization}
  //       </div>
  //     );
  //   },[]));
  // });

  const classes = useStyles();

  const doctorsOptions = [];

  const doctorHandleOptions = useCallback(() => {
    doctorData.map((item) => 
    console.log(
      "Doctor: " + item.doctor_firstname + " is pushed to an array " + doctorsOptions.push(item.doctor_firstname)
    )
    );
  },[doctorsOptions]);

  // const getDoctorFromAPI = () => {
  //   console.log("Doctors fetched from API")

  //   for (var i = 0; i < doctorData.length; i++) {
  //     console.log("doctor name pushed: " + doctorData[i].doctor_firstname);
  //     doctorsOptions.push(doctorData[i].doctor_firstname)
  //   }
  //   setDoctorNames(doctorsOptions)
  // }

  useEffect(() => {
    doctorHandleOptions();
    setDoctorNames(doctorsOptions);
    console.log(doctorsOptions);
    console.log("doctor selected: " + filter);
  },[doctor, doctorHandleOptions, doctorsOptions, filter]);

  // useEffect(() => {
  //   console.log("typing... " + q)
  // },[q]);

  // useEffect(() => {
  //   console.log("SetFilter var: " + filter)
  // },[filter]);

  useEffect(() => {
    console.log("doctor selected was: " + doctor);
  }, [doctor]);

  // useEffect(() => {
  //   console.log("initialization doctors");
  //   getDoctorFromAPI();
  // },[getDoctorFromAPI]);

  

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
          <Grid item xs={6} sm={6}>
            <Grid item xs={12} sm={6} className={classes.submit}>
              {/* <Autocomplete 
              options={doctorNames}
              getOptionLabel={(option) => option}
              style={{width: 300}}
              onChange={(e, v) => {
                (v === null) ?
                (setFilter("")) :
                (setFilter(v))
              }}
              renderInput={(params) => (
                <TextField 
                {...params}
                label="Search Doctor..."
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  (setFilter(e.target.value))
                }}
                />
              )}
              /> */}
              <Autocomplete 
              options={doctorNames}
              freeSolo
              autoComplete
              autoHighlight
              getOptionLabel={(option) => option}
              style={{width: 300}}
              // onChange={(e, v) => {
              //   (v === null) ?
              //   (setFilter("")) :
              //   (setFilter(v))
              // }}
              renderInput={(params) => (
                <TextField 
                {...params}
                label="Search Doctor..."
                variant="outlined"
                fullWidth
                // onChange={(e) => {setQ(e.target.value)}}
                onChange={(e) => {
                  setDoctor(e.target.value.toLowerCase());
                }}
                //value={setDoctor}
                />
              )}
              onChange={() => {
                doctorData.filter(doc => (doc.doctor_firstname.toLowerCase().indexOf(doctor) > -1 )).map((item) => {
                  setDoctor(item.doctor_firstname);
                  //console.log("you have entered to " + item.doctor_firstname + " page!")
                })
              }}
              //onClick={() => {console.log("you have entered to " + doctor + " page!")}}
              />
            </Grid>
            <Grid>
              <Grid item xs={12} sm={9}>
                <List>
                  {doctorData.filter(doc => (doc.doctor_firstname === filter)).map((item) => (
                    <ListItem
                      key={`${item.doctor_id}`}
                      button
                      component="a"
                      onClick={() => {}}
                    >
                      <ListItemIcon>
                        <Avatar alt="DocIcon"/>
                      </ListItemIcon>
                      <ListItemText primary={`${item.name}`}/>
                    </ListItem>
                  ))}
                </List>
                {/* <List>
                  {doctorData.filter(doc => (doc.doctor_firstname.toLowerCase().indexOf(q) > -1 )).map((item) => (
                    <ListItem
                      key={`${item.doctor_id}`}
                      button
                      component="a"
                      onClick={() => {}}
                    >
                      <ListItemIcon>
                        <Avatar alt="DocIcon"/>
                      </ListItemIcon>
                      <ListItemText primary={`${item.doctor_firstname}`}/>
                    </ListItem>
                  ))}
                </List> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}