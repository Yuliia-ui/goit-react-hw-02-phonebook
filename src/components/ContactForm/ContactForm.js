import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../ContactForm/ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.ContactForm} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            placeholder="Enter contact name"
            name="name"
            value={name}
            required={true}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type="tel"
            placeholder="Enter phone number"
            name="number"
            value={number}
            required={true}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
