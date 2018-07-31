import React, {Component} from "react";
import {Button, Glyphicon, ListGroup, ListGroupItem, PageHeader} from "react-bootstrap";
import axiosInstance from "../axiosInstance";
import {config} from "../../constants/config";
import {setClaims, deleteClaim} from "../../actions";
import {connect} from "react-redux";
import {LinkContainer} from "react-router-bootstrap";

const mapStateToProps = state => {
    return {claims: state.claims.claims};
};

const mapDispatchToProps = dispatch => {
    return {
        setClaims: claims => dispatch(setClaims(claims)),
        deleteClaim: index => dispatch(deleteClaim(index))
    };
};

class Claim extends Component {
    render() {
        return (
            <ListGroupItem>{this.props.claim.kenteken}
                <Button className="pull-right" bsStyle="danger" bsSize="xsmall"
                        onClick={() => this.props.onClick()}>
                    <Glyphicon glyph="trash"/>
                </Button>
            </ListGroupItem>
        );
    }
}

class ConnectedClaims extends Component {
    componentDidMount() {
        axiosInstance.get(`${config.apiUrl}/claims`).then((response) => {
            this.props.setClaims(response.data);
        });
    }

    handleDelete(index, id) {
        axiosInstance.delete(`${config.apiUrl}/claim/${id}`).then(() => {
            this.props.deleteClaim(index);
        });
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <PageHeader>
                    Claims
                </PageHeader>
                <ListGroup>
                    {this.props.claims.map((claim, index) => {
                        return (
                            <Claim key={claim.id} claim={claim} onClick={() => this.handleDelete(index, claim.id)}/>
                        );
                    })}
                </ListGroup>
                <LinkContainer to="/add-claim">
                    <Button>
                        Voeg Claim toe
                    </Button>
                </LinkContainer>
            </div>
        );
    }
}

const Claims = connect(mapStateToProps, mapDispatchToProps)(ConnectedClaims);

export default Claims;