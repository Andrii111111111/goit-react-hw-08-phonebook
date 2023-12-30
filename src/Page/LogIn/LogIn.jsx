import { Button, Container } from '@mui/material';
import { FieldEl, FormEl } from 'components/ContactForm/ContactForm.styled';
import { Section } from 'components/Section/Section.styled';
import { Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LogIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
  };

  return (
    <main>
      <Section>
        <Container>
          <h1 style={{ marginTop: '40px', textAlign: 'center', color: 'gray' }}>
            Enter your data
          </h1>
          <Formik
            initialValues={{email: ``, password: '' }}
            // initialValues={{ name: `${Math.ceil(Math.random()*100)}r@eeee.yyy`, email: `${Math.ceil(Math.random()*100)}r@eeee.yyy`, password: '12342343243' }}
            onSubmit={handleSubmit}
          >
            <FormEl autoComplete="off">
              <label htmlFor="email">E-mail</label>
              <div>
                <FieldEl
                  // as={TextField}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter e-mail ..."
                  label="email"
                  variant="outlined"
                />

                {/* <FormError name="name" /> */}
              </div>
              <label htmlFor="password">Password</label>
              <div>
                <FieldEl
                  // as={TextField}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter password ..."
                  label="password"
                  variant="outlined"
                />

                {/* <FormError name="name" /> */}
              </div>
              <Button variant="contained" type="submit">
                submit
              </Button>
            </FormEl>
          </Formik>
        </Container>
      </Section>
    </main>
  );
};

export default LogIn;