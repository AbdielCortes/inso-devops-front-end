import React, { Component } from 'react'
import "./Forms.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export class SignUpForm extends Component {
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
                        <p>Sign up for an account</p>
                    </div>
                    <div>
                        <p>I want to create an account as a doctor
                            <label class="switch">
                                <input type="checkbox"
                                onChange={handleChange("isDr")}
                                />
                                <span class="slider round" onClick={this.toggleDoctor}/>
                            </label>
                        </p>
                    </div>
                    <div className="input-container">
                        <input
                        type="firstName"
                        placeholder="first name"
                        onChange={handleChange("firstName")}
                        defaultValue={values.firstName}
                        />
                    </div>
                    <div className="input-container">
                        <input
                        type="LastName"
                        placeholder="last name"
                        onChange={handleChange("lastName")}
                        defaultValue={values.LastName}
                        />
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
                    {isDoctor ? (
                        <div>
                            <div className="input-container">
                                <input
                                type="address"
                                placeholder="address"
                                onChange={handleChange("address")}
                                defaultValue={values.address}
                                />
                            </div>
                            <div className="input-container">
                                <input
                                type="city"
                                placeholder="city"
                                onChange={handleChange("city")}
                                defaultValue={values.city}
                                />
                            </div>
                            <div className="input-container">
                                <input
                                type="state"
                                placeholder="state"
                                onChange={handleChange("state")}
                                defaultValue={values.state}
                                />
                            </div>
                            <div className="input-container">
                                <input
                                type="specialty"
                                placeholder="specialty"
                                onChange={handleChange("specialty")}
                                defaultValue={values.specialty}
                                />
                            </div>
                            <div className="input-container">
                                <input
                                type="license"
                                placeholder="license number"
                                onChange={handleChange("license")}
                                defaultValue={values.license}
                                />
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="input-container">
                                <input
                                type="birthDate"
                                placeholder="birth date DD/MM/YYYY"
                                onChange={handleChange("birthDate")}
                                defaultValue={values.birthDate}
                                />
                            </div>
                            <div className="input-container">
                                <input
                                type="insurance"
                                placeholder="insurance company"
                                onChange={handleChange("insurance")}
                                defaultValue={values.insurance}
                                />
                            </div>
                        </div>
                    )}
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
                        type={isRevealedConfirmPassword ? "unhiddenPassword" : "password"}
                        placeholder="confirm password"
                        onChange={handleChange("confirmPassword")}
                        defaultValue={values.confirmPassword}
                        />
                        <span onClick={this.toggleConfirmPassword}>
                        <span>
                            {isRevealedConfirmPassword ? (
                            <FontAwesomeIcon icon={faEye} className="customIcon" />
                            ) : (
                            <FontAwesomeIcon icon={faEyeSlash} className="customIcon" />
                            )}
                        </span>
                        </span>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUpForm
