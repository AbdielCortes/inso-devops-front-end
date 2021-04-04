import React, { Component } from 'react'
import SignUpForm from "./SignUpForm";
// import axios from "axios";
// import jwt_decode from "jwt-decode";

export class SignUpComponent extends Component {
    state = {
        firstName : "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        birthDate: "",
        gender: "",
        insurance: "",
        address: "",
        city: "",
        state: "",
        specialty: "",
        license: "",
        errorMessage: "",
        isDr: false
    };

        //Handle fields change
    handleChange = input => e => {
        if (input == "isDr") {
            this.state.isDr = !this.state.isDr;
            this.setState({[this.state.isDr]: !this.state.isDr});
        } else {
            this.setState({[input]: e.target.value});
        }
    }

    validateFields = () => {
        // regex to check that the email input follows the correct format
        let emailRegex = new RegExp("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}");
        // array to store string corresponding to the incorrect input fields
        let errorArray = [];
        // if nothing was typed into first name
        if (this.state.firstName.length === 0) { 
            errorArray.push("first name");
        }
        // if nothing was typed into last name
        if (this.state.lastName.length === 0) { 
            errorArray.push("last name");
        }
        // if nothing was typed into email OR the email does not follow the correct format
        if (this.state.email.length === 0 || !emailRegex.test(this.state.email)) {
            errorArray.push("email");
        }
        // if nothing was typed into password
        if (this.state.password.length === 0) {
            errorArray.push("password");
        }
        // if nothing was typed into confirm password
        if (this.state.confirmPassword.length === 0) {
            errorArray.push("confirm password");
        }
        // if password and confirm password don't matck
        if (this.state.password !== this.state.confirmPassword) {
            errorArray.push("password dont't match");
        }
        // if nothing was typed into gender OR "gender" was selected
        if (this.state.gender.length === 0  || this.state.gender === "select") { 
            errorArray.push("gender");
        }
        // if the account being created is for a doctor
        if (this.state.isDr) {
            // if nothing was typed into address
            if (this.state.address.length === 0) { 
                errorArray.push("address");
            }
            // if nothing was typed into city
            if (this.state.city.length === 0) { 
                errorArray.push("city");
            }
            // if nothing was typed into state
            if (this.state.state.length === 0) { 
                errorArray.push("state");
            }
            // if nothing was typed into specialty
            if (this.state.specialty.length === 0) { 
                errorArray.push("specialty");
            }
            // if nothing was typed into license
            if (this.state.license.length === 0) { 
                errorArray.push("license number");
            }
        } else { // else the account being created is for a patient
                // if nothing was typed into birth date
            if (this.state.birthDate.length === 0) { 
                errorArray.push("birth date");
            }
            // if nothing was typed into insurance
            if (this.state.insurance.length === 0) { 
                errorArray.push("insurance company");
            }
        }

        // if array length is larger that 0, then we encountered an error with one of the input fields
        if (errorArray.length > 0) {
            // construct error message string
            let errorString = "Invalid input: ";
            if (errorArray.length === 1) { // if we only encountered and error
                errorString += errorArray[0] + ".";
            } else {
                for (var i = 0; i < errorArray.length; i += 1) {
                    if (i === errorArray.length-1) { // if i is the index of the last element in errorArray
                        errorString += "and " + errorArray[i] + ".";
                    } else {
                        errorString += errorArray[i] + ", ";
                    }
                }
            }
            // update error message
            this.state.errorMessage = errorString;
            this.setState({[this.state.errorMessage]: errorString});

            return false;
        } else { // we encountered no error
            // clear error message
            this.state.errorMessage = "";
            this.setState({[this.state.errorMessage]: ""});
            
            return true;      
        }
    };

    // handleSubmit = (e) => {
    //     e.preventDefault();
    
    //     const data = {
    //       email: this.state.email,
    //       first_name: this.state.firstName,
    //       last_name: this.state.lastName,
    //       rua: this.state.rua,
    //       password: this.state.password
    //     };
    //     if (this.validateFields()) {
    //       axios
    //         .post("signup", data)
    //         .then((res) => {
    //           console.log(res);
    //           localStorage.setItem("token", res.data.access_token);
    //           console.log("Access token: " ,res.data.access_token);
    //           console.log("Decoded token: ", jwt_decode(localStorage.getItem("token")));
             
    //           history.push("/home");
    //         })
    //         .catch((err) => {
    //           this.state.errorMessage = "Try Again: an error ocurred.";
    //           this.setState({[this.state.errorMessage]: "Try Again: an error ocurred."});
    //           console.log(err);
    //         });
    //     }else{
    //       console.log(this.validateFields());
    //     }
    // };

    render() {
        const {firstName, lastName, email, password, confirmPassword, birthDate, gender, insurance, address, city, state, specialty, license} = this.state
        const values = {firstName, lastName, email, password, confirmPassword, birthDate, gender, insurance, address, city, state, specialty, license}

        return (
            <div>
                <SignUpForm handleChange={this.handleChange} values={values} />
                <label> { this.state.errorMessage } </label> <br/>
                <button className="form-button" onClick={this.validateFields}>
                    Submit
                </button>
            </div>
        )
    }
}

export default SignUpComponent
