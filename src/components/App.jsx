import React, { useEffect, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { changeFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import {
  deleteContact,
  logIn,
  logOut,
  signUp,
  userLocalStorage,
} from 'api/api';
import { submit } from './ContactForm/ContactForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navigation = lazy(() => import('./Header/Header'));
const RegisterForm = lazy(() => import('../pages/RegisterForm/RegisterForm'));
const LoginForm = lazy(() => import('../pages/LoginForm/LoginForm'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const userEmail = useSelector(state => state.auth.user.email);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  const userName = useSelector(state => state.auth.user.name);
  const authError = useSelector(state => state.auth.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(userLocalStorage());
  }, [dispatch]);

  const onSubmitContact = evt => {
    evt.preventDefault();
    submit(evt, dispatch, contacts);
  };
  const onChangeInput = evt => {
    dispatch(changeFilter(evt.target.value));
  };
  const filterByName = () => {
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
  };
  const deletingContact = evt => {
    dispatch(deleteContact(evt.target.id));
  };

  const onSignUp = async evt => {
    evt.preventDefault();
    const obj = {
      name: evt.currentTarget[0].value,
      email: evt.currentTarget[1].value,
      password: evt.currentTarget[2].value,
    };
    const formReset = () => {
      evt.target[0].value = '';
      evt.target[1].value = '';
      evt.target[2].value = '';
    };

    await dispatch(signUp(obj));

    if (authError === true) {
    
      toast.error('Registration failed. Please check your details.');
      return;
    } else {
      await formReset();
      navigate('/contacts', { replace: true });
   
      toast.success('Registration successful! You are now logged in.');
    }
  };
  const onLogin = async evt => {
    evt.preventDefault();
    const obj = { email: evt.target[0].value, password: evt.target[1].value };
    const formReset = () => {
      evt.target[0].value = '';
      evt.target[1].value = '';
    };
    await dispatch(logIn(obj));

    if (authError === true) {
  
      toast.error('Login failed. Please check your credentials.');
      return;
    } else {
      await formReset();
      navigate('/contacts', { replace: true });
    
      toast.success('Login successful!');
    }
  };
  const onLogout = async () => {
    await dispatch(logOut());
    navigate('/', { replace: true });

    toast.info('You have been logged out.');
  };
  return isRefreshing ? (
    <div>Loading</div>
  ) : (
    <Suspense fallback={<div>Loading...</div>}>
      <ToastContainer />
      <Routes>
        <Route
          path="/register"
          element={<RegisterForm onSignUp={onSignUp} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/login"
          element={<LoginForm onLogin={onLogin} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/contacts"
          element={
            <Contacts
              onSubmitContact={onSubmitContact}
              onChangeInput={onChangeInput}
              contacts={contacts}
              filter={filter}
              filterByName={filterByName}
              deletingContact={deletingContact}
              userEmail={userEmail}
              onLogout={onLogout}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="/"
          element={<Navigation isLoggedIn={isLoggedIn} userName={userName} />}
        />
        <Route path="*" element={<div>Ups something went wrong</div>} />
      </Routes>
    </Suspense>
  );
};
