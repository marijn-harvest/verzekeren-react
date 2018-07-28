import React, {Component} from "react";
import {Button, FormGroup, PageHeader, Radio} from "react-bootstrap";
import {config} from "../../constants/config";
import axiosInstance from "../axiosInstance";

class AutoVerzekering extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "WA",
            submitMessage: "Vraag auto verzekering aan"
        };
    }

    componentDidMount() {
        axiosInstance.get(`${config.apiUrl}/auto-verzekering`).then(function (response) {
            if (response.data.type) {
                this.setState({type: response.data.type, submitMessage: "Wijzig auto verzekering"});
            }
        }.bind(this));
    }

    handleSubmit = async event => {
        event.preventDefault();

        axiosInstance.post(`${config.apiUrl}/auto-verzekering`, this.state).then(function () {
            this.setState({submitMessage: "Wijzig auto verzekering"})
        }.bind(this));
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
                <form onSubmit={this.handleSubmit}>
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

export default AutoVerzekering;