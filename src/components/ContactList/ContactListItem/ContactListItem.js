import React from 'react';
import PropTypes from 'prop-types';
import styles from '../ContactListItem/ContactListItem.module.css';

const ContactListItem = ({ name, id, number, deleteContact }) => {
  return (
    <li key={id} className={styles.listItem}>
      <p>{name}:</p>
      <p>{number}</p>
      <section className={styles.section}>
        <button type="button" onClick={deleteContact}>
          Delete
        </button>
      </section>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
