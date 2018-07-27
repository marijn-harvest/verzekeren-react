import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import "./Login.css";
import axios from 'axios';
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

        axios.get(config.apiUrl + '/principal', {
            headers: {'Authorization': 'Basic ' + authorizationHeader, 'X-Requested-With': 'XMLHttpRequest'},
            withCredentials: true
        })
            .then(response => {
                console.log(response);
                localStorage.setItem('isAuthenticated', 'true');
                history.push('/auto-verzekering');
            }).catch(error => {
            console.log(error);
            localStorage.setItem('isAuthenticated', 'false');
        });
    };

    render() {
        return (
            <div className="Login">
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