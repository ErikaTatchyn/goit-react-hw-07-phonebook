import React from 'react';
import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleUpdateFilter = e => {
    dispatch(updateFilter(e.target.value));
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
