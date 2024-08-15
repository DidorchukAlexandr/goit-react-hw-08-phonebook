import { Box, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', sm: 'center', md: 'center' },
        width: { xs: '100%' },
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        padding="50px 24px 0"
        textAlign="center"
      >
        <Box component="span">📱</Box> Phonebook
      </Typography>
      <Typography
        component="h2"
        variant="h4"
        color="primary.dark"
        fontWeight={700}
        sx={{
          marginTop: '10vh',
          fontSize: {
            xs: '1.5rem',
            sm: '2rem',
            md: '2.5rem',
          },
          paddingBottom: {
            xs: '3rem',
            sm: '3.5rem',
            md: '4rem',
            lg: '4.5rem',
            xl: '5rem',
          },
          maxWidth: {
            xs: '200px',
            sm: '280px',
            md: '100%',
          },
        }}
      >
        Simple - Intuitive - Efficeint
      </Typography>
      <Typography
        component="p"
        variant=" h3"
        color="#2542ab"
        fontWeight={300}
        sx={{
          maxWidth: {
            xs: '340px',
            sm: '580px',
            md: '100%',
          },
          textAlign: {
            md: 'center',
          },
        }}
      >
        "Your phonebook should be easy to use and actually help you achieve
        maximum productivity without compromising on the look and feel"
      </Typography>
    </Box>
  );
}
