import React, {useCallback, useEffect, useState} from "react";

import Autocomplete from "@material-ui/lab/Autocomplete";
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';
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
import Select from "react-select";
import Sidebar from "../Components/Sidebar";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import {doctorData} from '../dummydata';
import { makeStyles } from "@material-ui/core/styles";

// creating styles for the components
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3)
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
  // select: {
  //   width: "11%",
  //   marginRight: 70,
  //   marginTop: 30,
  //   zIndex: 9999
  // }
}));

// creating sections in tab navigator
const sections = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "/aboutus" },
  { title: "ProfileUser", url: "/profileuser" },
  { title: "Appointment", url: "/appointment" },
  { title: "Appointment Doc", url: "/appointmentDoc" },
  {title:   "PatientP",   url: "/patientp"},
];

// photo backgrond
const photo = {
  image: "https://www.diabetes.co.uk/wp-content/uploads/2019/01/iStock-10131071761-1.jpg",
};

// creates a mini about paragraph
const sidebar = {
  title: "About",
  description:
    "We are a group of students that have the determination to help people around Puerto Rico, which can find any doctor specialist you need at the moment.",
};

export default function HomePage() {

  // hoocks to save information or booleans
  const [doctor, setDoctor] = useState('');
  const [docs, setDocs] = useState([]);
  const [q, setQ] = useState("");
  const [doctorNames, setDoctorNames] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredName, setFilteredName] = useState("");
  const [isDoctor, setIsDoctor] = useState(false);
  const [filter, setFilter] = useState(null);
  const [filterBox, setFilterBox] = useState(null);


  // where the db is
  const url = 'https://devops-app-deploy.herokuapp.com/';

  //get doctors from db
  const getDoctors = () => {
    axios.get(`${url}doctors`)
    .then((response) => {
      const result = response.data.Users;
      setDocs(result);
    })
    .catch(error => console.log(`Error: ${error}`));
  }

  //inizialized doctors from db
  useEffect(() => {
    getDoctors();
  },[])

  // style variable
  const classes = useStyles();

  //array to save doctors options
  const doctorsOptions = [];

  // array to save filters doctors
  const filterOptions = [
    {value: "cardiologist", label: "Cardiologist"},
    {value: "pediatrician", label: "Pediatrician"},
    {value: "family physician", label: "Family Physician"},
    {value: "neurologist", label: "Neurologist"},
    {value: "dermatologist", label: "Dermatologist"},
    {value: "radiologist", label: "Radiologist"},
    {value: "dentist", label: "Dentist"},
    {value: "others", label: "Others"},
  ];

  // function to push doctors to doctorsOptions
  const doctorHandleOptions = useCallback(() => {
    docs.map((item) => 
    console.log(
      "Doctor: " + item.doctor_firstname + item.doctor_lastname + " is pushed to an array " + doctorsOptions.push(item.doctor_firstname)
    )
    );
  },[doctorsOptions]);

  //When doctors are fetched, this will run to setup the home page
  useEffect(() => {
    //console.log("Entering to see the first doctor: " + docs);
    doctorHandleOptions();
    setDoctorNames(doctorsOptions);
    console.log(doctorsOptions);
    console.log("doctor selected: " + doctor);
  },[docs]);

  //When find an doctor this function is prompt
  useEffect(() => {
    if (isDoctor) {
      console.log("Ready to go to Doctor "+ doctor + " page. The isDoctor variable is: "  + isDoctor);
      setIsDoctor(false);
    }
    else {
      console.log("no doctor to navegate for now...");
    }
  }, [isDoctor]);

  //debug for filter selected
  useEffect(() => {
    console.log("filter selected: " + filter);
  },[filter]);

  const clearFilterHandle = () => {
    setFilter(null);
    setFilterBox(null);
  }

  

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
              <Autocomplete 
              options={doctorNames}
              autoComplete
              autoHighlight
              getOptionLabel={(option) => option}
              style={{width: 300}}
              renderInput={(params) => (
                <TextField 
                {...params}
                label="Search Doctor..."
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setDoctor(e.target.value.toLowerCase());
                }}
                onKeyDown={e => {
                  if (e.keyCode === 13 && e.target.value) {
                    setDoctor(e.target.value);
                    setIsDoctor(true);
                  }
                }}
                />
              )}
              onChange={() => {
                docs.filter(doc => (doc.doctor_firstname.toLowerCase().indexOf(doctor) > -1 )).map((item) => {
                  setDoctor(item.doctor_firstname);
                })
              }}
              />
            </Grid>
            <Grid>
              <Grid item xs={12} sm={6}>
                <List>
                  {docs.filter(doc => (doc.doctor_specialization === filter)).map((item) => (
                    <ListItem
                      key={`${item.doctor_firstname}`}
                      button
                      component="a"
                      onClick={() => {console.log("just have clicked the list item: " + item.doctor_firstname)}}
                    >
                      <ListItemIcon>
                        <Avatar alt="DocIcon" />
                      </ListItemIcon>
                      <ListItemText primary={`${item.doctor_firstname}`}/>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Select
              onChange={(e) => {
                if(e.value === "dentist"){
                  setFilter("Dentist");
                }
                else if(e.value === "dermatologist"){
                  setFilter("Dermatologist");
                }
                else if(e.value === "cardiologist"){
                  setFilter("Cardiologist");
                }
                else if(e.value === "pediatrician"){
                  setFilter("Pediatrician");
                }
                else if(e.value === "family physician"){
                  setFilter("Family Physician");
                }
                else if(e.value === "radiologist"){
                  setFilter("Radiologist");
                }
                else if(e.value === "neurologist"){
                  setFilter("Neurologist");
                }
                else if(e.value === "others"){
                  setFilter("Others");
                }
                else {
                  setFilter(null);
                }
              }}
              //className={classes.select}
              options={filterOptions}
            />
            <Button variant="contained" color="secondary" size='small' onClick={clearFilterHandle}>
                Clear Filter
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}