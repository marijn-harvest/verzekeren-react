import React, {Component} from "react";
import {Button, ControlLabel, FormControl, FormGroup, PageHeader} from "react-bootstrap";
import history from "../history";
import axiosInstance from "../axiosInstance";
import {config} from "../../constants/config";
import {addClaim} from "../../actions";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        addClaim: claim => dispatch(addClaim(claim))
    };
};

class ConnectedAddClaim extends Component {
    constructor(props) {
        super(props);

        this.state = {
            kenteken: ""
        };
    }

    validateForm() {
        return this.state.kenteken.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        axiosInstance.post(`${config.apiUrl}/claim`, this.state)
            .then(response => {
                this.props.addClaim(response.data);
                history.push('/claims');
            }).catch(error => {

        });
    };

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <PageHeader>
                    Voeg Claim toe
                </PageHeader>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="kenteken" bsSize="large">
                        <ControlLabel>Kenteken</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.kenteken}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Voeg Claim toe
                    </Button>
                </form>
            </div>
        );
    }
}

const AddClaim = connect(null, mapDispatchToProps)(ConnectedAddClaim);

export default AddClaim;