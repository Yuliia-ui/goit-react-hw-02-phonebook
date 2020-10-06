import React from 'react';
import PropTypes from 'prop-types';
import styles from '../ContactListItem/ContactListItem.module.css';

const ContactListItem = ({ contact, deleteContact }) => (
  <>
    <p>{contact.name}:</p>
    <p>{contact.number}</p>
    <section className={styles.section}>
      <button type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </button>
    </section>
  </>
);

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
