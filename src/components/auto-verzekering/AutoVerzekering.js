import React, {Component} from "react";
import {Button, FormGroup, PageHeader, Radio} from "react-bootstrap";
import {config} from "../../constants/config";
import axiosInstance from "../axiosInstance";
import {setAutoVerzekeringType, setAutoVerzekeringTypeFetched} from "../../actions";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {type_fetched: state.autoVerzekering.type_fetched, type: state.autoVerzekering.type};
};

const mapDispatchToProps = dispatch => {
    return {
        setAutoVerzekeringType: type => dispatch(setAutoVerzekeringType(type)),
        setAutoVerzekeringTypeFetched: () => dispatch(setAutoVerzekeringTypeFetched())
    };
};

class ConnectedAutoVerzekering extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "WA",
            submitMessage: "Vraag auto verzekering aan"
        };
    }

    componentDidMount() {
        if (!this.props.type_fetched) {
            axiosInstance.get(`${config.apiUrl}/auto-verzekering`).then((response) => {
                this.props.setAutoVerzekeringTypeFetched();
                if (response.data.type) {
                    this.props.setAutoVerzekeringType(response.data.type);
                    this.setState({type: response.data.type, submitMessage: "Wijzig auto verzekering"});
                }
            });
        } else if (this.props.type) {
            this.setState({type: this.props.type, submitMessage: "Wijzig auto verzekering"});
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        axiosInstance.post(`${config.apiUrl}/auto-verzekering`, {type: this.state.type}).then(() => {
            this.props.setAutoVerzekeringType(this.state.type);
            this.setState({submitMessage: "Wijzig auto verzekering"});
        });
    };

    handleTypeChange = event => {
        this.setState({type: event.target.value});
    };

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <PageHeader>
                    Auto Verzekering
                </PageHeader>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <FormGroup>
                        <Radio name="type" value="WA" checked={this.state.type === 'WA'}
                               onChange={this.handleTypeChange} inline>
                            WA
                        </Radio>{' '}
                        <Radio name="type" value="WA-beperkt" checked={this.state.type === 'WA-beperkt'}
                               onChange={this.handleTypeChange} inline>
                            WA Beperkt
                        </Radio>{' '}
                        <Radio name="type" value="WA-volledig" checked={this.state.type === 'WA-volledig'}
                               onChange={this.handleTypeChange} inline>
                            WA Volledig
                        </Radio>
                    </FormGroup>

                    <Button type="submit">{this.state.submitMessage}</Button>
                </form>
            </div>
        );
    }
}

const AutoVerzekering = connect(mapStateToProps, mapDispatchToProps)(ConnectedAutoVerzekering);

export default AutoVerzekering;