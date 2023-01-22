import { Box } from '@mui/system';
import LoginPage from './Login/Login';
import RegisterPage from './Register/Register';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register, logIn } from 'redux/auth/auth-operations';

export default function AuthRootComponent() {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (location.pathname === '/register') {
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
    }
    if (location.pathname === '/login') {
      dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
    }
    form.reset();
  };

  return (
    <div className="root">
      <form className="form" onSubmit={handleSubmit}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={500}
          margin="auto"
          marginTop={2}
          padding={5}
          borderRadius={3}
          boxShadow={
            'rgba(60, 64, 67, 0.5) 0px 2px 5px 0px, rgba(60, 64, 67, 0.3) 0px 2px 5px 2px'
          }
          borderColor="#2a363b"
          backgroundColor="white"
        >
          {location.pathname === '/login' ? (
            <LoginPage />
          ) : location.pathname === '/register' ? (
            <RegisterPage />
          ) : null}
        </Box>
      </form>
    </div>
  );
}
