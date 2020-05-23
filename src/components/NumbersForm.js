import React, { Component, cloneElement } from "react";
import "./NumbersForm.css";

export default class NumbersForm extends Component {
  constructor(props) {
    super(props);
    this.state = { values: [...Array(props.children.length)].map((_) => "") };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // TODO: fazer a requisição ao backend que irá salvar 'this.state' no banco de dados
    console.log(this.state);
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
