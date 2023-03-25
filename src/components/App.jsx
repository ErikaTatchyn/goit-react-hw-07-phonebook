import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import {
  selectContacts,
  selectContactsError,
  selectContactsLoading,
} from 'redux/selectors';
import styles from './App.module.css';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Phonebook</h1>
      <ContactForm contacts={contacts} />

      <h2 className={styles.heading}>Contacts</h2>
      {contacts.length > 0 ? (
        <div>
          <Filter />
          <ContactList />
          {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}
        </div>
      ) : (
        <p>Your phonebook is empty. Please add contacts.</p>
      )}
    </div>
  );
}
