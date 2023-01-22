import React from 'react';
import FormContacts from '../../components/FormContacts/FormContacts';
import ContactList from '../../components/ContactList/ContactList';
import FilterContacts from '../../components/FilterContacts/FilterContacts';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export default function ContactPage() {
  const { contacts } = useSelector(selectContacts);
  return (
    <>
      <FormContacts />
      {contacts.length > 0 && <FilterContacts />}
      <ContactList />
    </>
  );
}
