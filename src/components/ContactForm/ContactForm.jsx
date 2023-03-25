import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';

import styles from './ContactForm.module.css';
import { addContact } from 'redux/operations';

function ContactForm({ contacts }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    name === 'name' ? setName(value) : setPhone(value);
  };

  const handleAddContact = e => {
    e.preventDefault();

    if (!name || !phone) {
      alert('Please enter a name and phone');
      return;
    }

    const isContactExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExist) {
      alert(`Contact ${name} already exists`);
      return;
    }

    const id = nanoid();
    dispatch(addContact({ id, name, phone }));

    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleAddContact} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={styles.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.label}>
        phone
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          className={styles.input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

ContactForm.defaultProps = {
  contacts: [],
};

export default ContactForm;
