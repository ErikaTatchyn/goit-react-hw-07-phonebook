import React from 'react';
import styles from './Filter.module.css';

import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleUpdateFilter = e => {
    // dispatch(updateFilter(e.target.value));
  };

  return (
    <label className={styles.filterLabel}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={styles.filterInput}
        value={filter}
        onChange={handleUpdateFilter}
      />
    </label>
  );
};

export default Filter;
