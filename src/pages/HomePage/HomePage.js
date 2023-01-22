import { Box, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <Typography
      variant="h2"
      component="h1"
      padding="50px 24px 0"
      textAlign="center"
    >
      <Box component="span">📱</Box> Phonebook welcome page
    </Typography>
  );
}
