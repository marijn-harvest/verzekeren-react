import React, {Component} from "react";
import {Navbar, NavItem, Nav, NavDropdown} from 'react-bootstrap';
import {Switch, Route} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

import AutoVerzekering from './auto-verzekering/AutoVerzekering';
import Register from './register/Register';
import Claims from './claims/Claims';
import Login from './login/Login';
import Profiel from './profiel/Profiel';
import {PrivateRoute} from "./PrivateRoute";

class App extends Component {
    render() {
        let navHeader = localStorage.getItem('isAuthenticated') === 'true' ? <Header/> : '';

        return <div>
            {navHeader}
            <Main/>
        </div>;
    }
}

const Header = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="/">Verzekeringen</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <LinkContainer to="/auto-verzekering">
                <NavItem eventKey={1}>
                    Auto Verzekering
                </NavItem>
            </LinkContainer>
            <LinkContainer to="/claims">
                <NavItem eventKey={2}>
                    Claims
                </NavItem>
            </LinkContainer>
        </Nav>
        <Nav pullRight>
            <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
                <LinkContainer to="/profiel">
                    <NavItem eventKey={3.1}>
                        Profiel
                    </NavItem>
                </LinkContainer>
            </NavDropdown>
        </Nav>
    </Navbar>
);

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/register' component={Register}/>
            <PrivateRoute path='/auto-verzekering' component={AutoVerzekering}/>
            <PrivateRoute path='/claims' component={Claims}/>
            <PrivateRoute path='/profiel' component={Profiel}/>
        </Switch>
    </main>
);

export default App;