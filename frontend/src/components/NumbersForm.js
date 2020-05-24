import React, { Component, cloneElement } from "react";
import "./NumbersForm.css";
import api from "../services/api";

export default class NumbersForm extends Component {
  constructor(props) {
    super(props);
    this.state = { values: [...Array(props.children.length)].map((_) => "") };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.beginFormSubmition();
    try {
      await api.post("/numbers/store", {
        values: this.state.values,
      });
      this.props.endFormSubmition(true);
    } catch (error) {
      this.props.endFormSubmition(false);
    }
  };

  handleChange = (event, index) => {
    const newValues = [...this.state.values];
    newValues[index] = parseInt(event.target.value, 10);
    this.setState({
      values: newValues,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.children.map((child, i) =>
          cloneElement(child, {
            value: this.state.values[i],
            key: i,
            handleChange: (event) => this.handleChange(event, i),
          })
        )}
        <button type="submit">SUBMETER</button>
      </form>
    );
  }
}
