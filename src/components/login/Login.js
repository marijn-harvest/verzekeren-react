import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel, PageHeader} from "react-bootstrap";
import axiosInstance from "../axiosInstance";
import {config} from '../../constants/config';
import history from '../history';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = async event => {
        event.preventDefault();

        const authorizationHeader = btoa(this.state.username + ':' + this.state.password);

        axiosInstance.get(`${config.apiUrl}/principal`, {
            headers: {'Authorization': 'Basic ' + authorizationHeader}
        })
            .then(response => {
                console.log(response);
                sessionStorage.setItem('isAuthenticated', 'true');
                history.push('/auto-verzekering');
            }).catch(error => {
            console.log(error);
            sessionStorage.setItem('isAuthenticated', 'false');
        });
    };

    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <PageHeader>
                    Inloggen
                </PageHeader>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>Gebruikersnaam</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Wachtwoord</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}

export default Login;