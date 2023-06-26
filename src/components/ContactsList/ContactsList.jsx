import React from 'react';

import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operation';

export function ContactsList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => {
        return (
          <li className={css.items} key={contact.id} id={contact.id}>
            <span className={css.span}>{contact.name}</span>:
            <span className={css.span}>{contact.number}</span>
            <button
              className={css.itemBtn}
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}