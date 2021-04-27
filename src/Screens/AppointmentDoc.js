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

export default function AppointmentDoc() {

    const [data, setData] = useState([]);
    const [active, setActive] = useState(true);

    const classes = useStyles();

    const columns = useMemo(
        () => [
            {
                //first group doctors appointments
                Header: "Patient's Appointments",
                //first group columns
                columns: [
                    {
                        Header: "Patient's",
                        accessor: "patient_firstname"
                    },
                    {
                        Header: "Date",
                        accessor: "appointment_date",
                        // Cell: ({ cell: { value } }) => {
                        //     const hour = Math.floor(value / 60);
                        //     const min = Math.floor(value % 60);
                        //     return (
                        //         <>
                        //         {/* {hour > 0 ? `${hour} hr${hour > 1 ? "s" : ""} ` : ""}
                        //         {min > 0 ? `${min} min${min > 1 ? "s" : ""} ` : ""} */}
                        //         {hour + " : " + min}
                        //         </>
                        //     );
                        // }
                    }
                ]
            }
        ],[]);

        const appointmentsOptions = [];

        const appointmentHandleOptions = useCallback(() => {
            appointData.map((item) => 
            console.log(
              "appointment: " + item.appointment_id + " is pushed to an array " + appointmentsOptions.push(item)
            )
            );
          },[appointmentsOptions]);

          useEffect(() => {
            appointmentHandleOptions();
            setData(appointmentsOptions);
            console.log("result from the data: " + appointmentsOptions);
            setActive(false);
            //console.log("doctor selected: " + data);
          },[active]);

    return (
      <React.Fragment>
        <Container maxWidth="lg">
          <MuiThemeProvider theme={themeLight}>
            <Header title="Appointment" sections={sections} />
            <CssBaseline />
            <div className={classes.paper}>
              <Typography variant="h5" component="div" className={classes.header}>
                Patient's Appointments:
              </Typography>
              <Table columns={columns} data={data}/>
  
            </div>
          </MuiThemeProvider>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }