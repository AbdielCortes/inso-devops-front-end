import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React, {useEffect, useState} from "react";

import Alert from 'react-popup-alert';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import DateTimePicker from 'react-datetime-picker';
import Footer from "../Components/Footer";
import Grid from "@material-ui/core/Grid";
import Header from "../Components/Header";
import ProfilePhoto from "../Components/ProfilePhoto";
import Sidebar from "../Components/Sidebar";
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
    { title: "Profile User", url: "/profileuser" },
    { title: "Appointment", url: "/appointment" },
];

const profilePhoto = {
    image: "https://i.pinimg.com/originals/d4/c9/86/d4c986b19760342bf0b54ca3d50a96b7.jpg",
};

const sidebar = {
    name: "Ashton S. Verano",
    specialty: "Ortodoncista",
    location: "Mayagüez, Puerto Rico",
    description:
        "15 años de experiencia. Más de 5 certificados. " +
        "Top 3 en los mejores dentistas a nivel de Puerto Rico.",
};

export default function DoctorInfo() {

    const [date, setDate] = useState(new Date());
    const [isShow, setIsShow] = useState(false);
    //const [alertType, setAlertType] = useState('');
    const [alertText, setAlertText] = useState('successful appointment');
    const classes = useStyles();

    const handleChange = (newdata) => {
        setDate(newdata);
    };

    const handleCloseAlert = () => {
        setIsShow(false);
        setAlertText('');
    };

    const handleShowAlert = () => {
        setIsShow(true);
        setAlertText('Successful appointment!')
    };

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <MuiThemeProvider theme={themeLight}>
                    <Header title="Doctor Information" sections={sections} />
                    <CssBaseline />
                    <div className={classes.paper}></div>
                </MuiThemeProvider>
                <ProfilePhoto post={profilePhoto} />
                <Grid container spacing={5} className={classes.mainGrid}>
                    <Sidebar
                        name={sidebar.name}
                        specialty={sidebar.specialty}
                        location={sidebar.location}
                    />
                    <DateTimePicker
                    value={date}
                    onChange={handleChange}
                    />
                    <Button variant="contained" color="secondary" size='small' onClick={handleShowAlert}>
                        Make Appointment
                    </Button>
                    <Alert 
                    header={'Successful appointment!'}
                    btnText={'Close'}
                    text={'Appointment will be on: ' + date}
                    show={isShow}
                    onClosePress={handleCloseAlert}
                    pressCloseOnOutsideClick={true}
                    showBorderBottom={true}
                    />
                </Grid>
                <Sidebar description={sidebar.description}/>
            </Container>
            <Footer />
        </React.Fragment>
    );
}