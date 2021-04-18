import React, { Component } from 'react'
import "./Forms.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


export class PatientProfileForm extends Component {
    state = {
        isRevealedPassword: false,
        isRevealedConfirmPassword: false,
        isDoctor: false
    };
    
    togglePassword = (e) => {
        this.setState({ 
            isRevealedPassword: !this.state.isRevealedPassword 
        });
    };
    
    toggleConfirmPassword = (e) => {
        this.setState({
            isRevealedConfirmPassword: !this.state.isRevealedConfirmPassword,
        });
    };

    toggleDoctor = (e) => {
        this.setState({
            isDoctor: !this.state.isDoctor,
        });
    };

    render() {
        const { values, handleChange } = this.props;
        const { isRevealedPassword, isRevealedConfirmPassword, isDoctor } = this.state;

        return (
            <div>
                <form>
                    <div className="instructions">
                        <p>View your Info</p>
                    </div>
                    <div className="input-container">
                        <input
                        type="firstName"
                        placeholder="Full Name"
                        onChange={handleChange("firstName")}
                        defaultValue={values.firstName}
                        />
                    </div>
                    <div className="input-container">
                        <input
                        type="email"
                        placeholder="email"
                        onChange={handleChange("email")}
                        defaultValue={values.email}
                        />
                    </div>

                    <div className="input-container">
                        <input
                        type={isRevealedPassword ? "unhiddenPassword" : "password"}
                        placeholder="password"
                        onChange={handleChange("password")}
                        defaultValue={values.password}
                        />
                        <span onClick={this.togglePassword}>
                        <span>
                            {isRevealedPassword ? (
                            <FontAwesomeIcon icon={faEye} className="customIcon" />
                            ) : (
                            <FontAwesomeIcon icon={faEyeSlash} className="customIcon" />
                            )}
                        </span>
                        </span>
                    </div>

                    <div className="input-container">
                                <input
                                type="birthDate"
                                placeholder="birth date DD/MM/YYYY"
                                onChange={handleChange("birthDate")}
                                defaultValue={values.birthDate}
                                />
                                <input 
                                type="age"
                                placeholder="Age"
                                />
                    </div>
                    <div className="Input-Container">
                        
                    </div>

                    <div className="select-container">
                        <select
                        type="gender"
                        onChange={handleChange("gender")}
                        defaultValue={values.gender}
                        >
                        <option value="select">gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Non-binary</option>
                        <option value="other">Other</option>
                        <option value="not-specified">Prefer not to say</option>
                        </select>
                    </div>
                    {
                        <div>
                            <div className="input-container">
                                <input
                                type="insurance"
                                placeholder="Medical Plan"
                                onChange={handleChange("insurance")}
                                defaultValue={values.insurance}
                                />
                            </div>
                        </div>
                    }
                   
                </form>
            </div>
        )
    }
}

export default PatientProfileForm
