import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React, {useCallback, useEffect, useMemo, useState} from 'react';

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "../Components/Footer";
import { Grid } from "@material-ui/core";
import Header from "../Components/Header";
import Table from "../Components/Table";
import Typography from "@material-ui/core/Typography";
import {appointData} from '../appointmentsData'
import axios from 'axios';
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

export default function Appointment() {

    const [data, setData] = useState([]);
    const [active, setActive] = useState(true);
    const [apt, setApt] = useState([]);
    const [docs, setDocs] = useState([]);
    const [pat, setPat] = useState([]); 

    const classes = useStyles();

    // where the db is
    const url = 'https://devops-app-deploy.herokuapp.com/';

    //get appointment table from db
    const getAppointments = () => {
      axios.get(`${url}appointment`)
      .then((response) => {
        const result = response.data.Users;
        setApt(result);
      })
      .catch(error => console.log(`Error: ${error}`));
    }

    // get patients table from db
    const getPatients = () => {
      axios.get(`${url}patients`)
      .then((response) => {
        const result = response.data.Users;
        setPat(result);
      })
      .catch(error => console.log(`Error: ${error}`));
    }

    // get doctors table from db
    const getDoctors = () => {
      axios.get(`${url}doctors`)
      .then((response) => {
        const result = response.data.Users;
        setDocs(result);
      })
      .catch(error => console.log(`Error: ${error}`));
    }

    // columns for the table of appointments
    const columns = useMemo(
        () => [
            {
                //first group doctors appointments
                Header: "Doctor's Appointments",
                //first group columns
                columns: [
                    {
                      Header: "Appointment ID",
                      accessor: "appointment_id"
                    },
                    {
                      Header: "Doctor's ID",
                      accessor: "doctor_id"
                    },
                    {
                        Header: "Doctor Name",
                        accessor: "doctor_firstname"
                    },
                    {
                      Header: "Doctor LastName",
                      accessor: "doctor_lastname"
                    },
                    {
                      Header: "Date",
                      accessor: "appointment_date",
                    }
                ]
            }
        ],[]);

        // array to push all data
        const appointmentsOptions = [];

        // function to push into the appointmentsOptions array
        const AllDataHandleOptions = useCallback(() => {
          apt.map((item) => 
          console.log(
            "appointment: " + item.appointment_id + " is pushed to an array " + appointmentsOptions.push(item)
          )
          );
          docs.map((item) => 
          console.log(
            "docs: " + item.doctor_id + " is pushed to an array " + appointmentsOptions.push(item)
          )
          );
          pat.map((item) => 
          console.log(
            "patients: " + item.patient_id + " is pushed to an array " + appointmentsOptions.push(item)
          )
          );
        },[appointmentsOptions]);


          // initialization of table
          useEffect(() => {
            getAppointments();
            getDoctors();
            getPatients();
            AllDataHandleOptions();
            setData(appointmentsOptions);
            console.log("result from the data: " + appointmentsOptions);
            setActive(false);
            console.log("active is set to false " + active);
          },[active]);

    return (
      <React.Fragment>
        <Container maxWidth="lg">
          <MuiThemeProvider theme={themeLight}>
            <Header title="Appointment" sections={sections} />
            <CssBaseline />
            <div className={classes.paper}>
              <Typography variant="h5" component="div" className={classes.header}>
                Doctor's Appointments:
              </Typography>
              <Table columns={columns} data={data}/>
  
            </div>
          </MuiThemeProvider>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }