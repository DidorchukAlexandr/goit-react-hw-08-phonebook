import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from 'redux/contacts/contacts-operations';
import { useEffect } from 'react';
import { selectContacts, selectFilter } from 'redux/selectors';
import { List, ListItem, Avatar, Typography, IconButton } from '@mui/material';
import { MdDelete } from 'react-icons/md';

export default function ContactList() {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const getFirstLetter = name => {
    return name.charAt(0).toUpperCase();
  };

  const filteredContacts = getFilteredContacts();

  return (
    <List sx={{ padding: '10px' }}>
      {isLoading}
      {error && <p>{error}</p>}
      {contacts.length > 0 && (
        <Typography
          sx={{ padding: '10px' }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={500}
          margin="auto"
          variant="h5"
        >
          Total contacts: {contacts.length}
        </Typography>
      )}
      {contacts.length > 0 &&
        filteredContacts.map(({ id, name, number }) => (
          <ListItem
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              maxWidth: 500,
              margin: 'auto',
            }}
            key={id}
            divider
          >
            <Avatar sx={{ bgcolor: 'purple' }}>{getFirstLetter(name)}</Avatar>
            <Typography variant="h5">
              {name}:{number}
            </Typography>
            <IconButton
              aria-label="delete"
              color="secondary"
              onClick={() => dispatch(deleteContact(id))}
            >
              <MdDelete />
            </IconButton>
          </ListItem>
        ))}
    </List>
  );
}
