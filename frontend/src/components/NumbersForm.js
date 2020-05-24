import React, { Component, cloneElement } from "react";
import "./NumbersForm.css";
import api from "../services/api";

export default class NumbersForm extends Component {
  constructor(props) {
    super(props);
    this.ChildNumbers = props.children.filter(
      (child) => child.type.name === "Number"
    );
    this.OtherChilds = props.children.filter(
      (child) => child.type.name !== "Number"
    );
    this.state = {
      values: [...Array(this.ChildNumbers.length)].map((_) => ""),
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.beginFormSubmition();
    try {
      await api.post("/numbers/store", {
        values: this.state.values,
      });
      this.props.endFormSubmition({
        isSuccess: true,
        totalSumOfNumbers: this.state.values.reduce(
          (previous, current) => previous + current
        ),
      });
    } catch (error) {
      this.props.endFormSubmition({ isSuccess: false });
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
        {this.ChildNumbers.map((child, i) =>
          cloneElement(child, {
            value: this.state.values[i],
            key: i,
            handleChange: (event) => this.handleChange(event, i),
          })
        )}
        {[...this.OtherChilds]}
        <button type="submit">SUBMETER</button>
      </form>
    );
  }
}
