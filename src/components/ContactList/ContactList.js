import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';
import styles from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => (
  <ul className={styles.list}>
    {contacts.map(contact => (
      <li className={styles.listItem} key={contact.id}>
        <ContactListItem contact={contact} deleteContact={deleteContact} />
      </li>
    ))}
  </ul>
);
ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
