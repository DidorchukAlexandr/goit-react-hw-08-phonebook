import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { refreshUser } from "redux/auth/auth-operations";
import { useEffect, lazy } from "react";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const AuthRootComponent = lazy(() => import('../components/Auth/index'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));


export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
        <Route path='login' element={
          <RestrictedRoute redirectTo="/contacts"
          component={<AuthRootComponent />} />
          } />
        <Route path="register" element={<RestrictedRoute redirectTo="/contacts"
          component={<AuthRootComponent />} />
        } />
        <Route path="contacts" element={
          <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
        } />
        </Route>
        </Routes>
        <ToastContainer autoClose={2000} />
      </>
  )
};
