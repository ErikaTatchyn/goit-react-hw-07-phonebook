import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, phone }) => (
        <li className={s.item} key={id}>
          <span>{name}:</span>
          <span>{phone}</span>
          <button
            className={s.button}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
