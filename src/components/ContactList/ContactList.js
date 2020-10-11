import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';
import styles from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => (
  <ul className={styles.list}>
    {contacts.map(({ id, ...prop }) => (
      <ContactListItem
        key={id}
        {...prop}
        deleteContact={() => deleteContact(id)}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
