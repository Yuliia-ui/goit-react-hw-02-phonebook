import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '4591256' },
      { id: 'id-2', name: 'Hermione Kline', number: '4438912' },
      { id: 'id-3', name: 'Eden Clements', number: '6451779' },
      { id: 'id-4', name: 'Annie Copeland', number: '2279126' },
    ],
    filter: '',
  };

  formSubmitHandler = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: uuidv4(), ...contact }],
    }));
  };

  getContacts = () => {
    const { contacts } = this.state;
    return contacts.map(contact => contact.name.toLowerCase());
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <div className={style.box}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.getFilteredContacts()}
          deleteContact={this.deleteeContact}
        />
      </div>
    );
  }
}
