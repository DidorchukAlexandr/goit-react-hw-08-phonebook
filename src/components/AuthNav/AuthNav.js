import { Box } from '@mui/material';
import { AuthLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Box component="div">
      <AuthLink to="/register">Register</AuthLink>
      <AuthLink to="/login">Log In</AuthLink>
    </Box>
  );
};
