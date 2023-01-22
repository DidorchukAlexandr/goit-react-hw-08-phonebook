import { useState } from 'react';
import { Form } from './FormContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { TextField, Button } from '@mui/material';
import { RiUserAddLine } from 'react-icons/ri';
import { selectContacts } from 'redux/selectors';
import { toast } from 'react-toastify';

export default function FormContacts() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleAddContact = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name.trim())) {
      toast.error(`There is already such contact as ${name}`, {
        icon: '⛔',
      });
      return;
    }
    dispatch(addContact({ name, number }));
    toast.success(`${name} added to contacts`, { icon: '☑️' });
    resetForm();
  };

  return (
    <Form onSubmit={handleAddContact}>
      <TextField
        value={name}
        onChange={handleChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        autoComplete="off"
        placeholder="Enter contact name"
        margin={'normal'}
        label="Name"
      />

      <TextField
        value={number}
        onChange={handleChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        autoComplete="off"
        placeholder="000-000-000"
        label="Number"
        margin={'normal'}
      />

      <Button
        type="submit"
        size="large"
        sx={{ mt: 3, border: '1px solid purple' }}
        endIcon={<RiUserAddLine size={24} />}
      >
        Add contact
      </Button>
    </Form>
  );
}
