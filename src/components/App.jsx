import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
  selectContacts,
} from 'redux/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

import Filter from './Filter/Filter';

export function App() {
  const contacts = useSelector(selectContacts);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFetchContacts = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await dispatch(fetchContacts());
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : contacts.length > 0 ? (
        <>
          <button onClick={handleFetchContacts}>Refresh</button>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>Your phonebook is empty. Please add contacts.</p>
      )}
    </div>
  );
}
