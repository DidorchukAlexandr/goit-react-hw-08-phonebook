import { HomeLink, ContactsLink } from './Navigation.styled';
import { Box, Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuth';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box component="nav" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <HomeLink to="/">
        
        <Typography variant="h5"> Home</Typography>
      </HomeLink>
      {isLoggedIn && (
        <ContactsLink to="/contacts">
          <Typography variant="h5">Contacts</Typography>
        </ContactsLink>
      )}
    </Box>
  );
};
