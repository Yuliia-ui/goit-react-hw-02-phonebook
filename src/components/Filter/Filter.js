import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Filter/Filter.module.css';

const changeFilter = ({ value, onChange }) => {
  return (
    <div>
      <input
        className={styles.filter}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

changeFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default changeFilter;
