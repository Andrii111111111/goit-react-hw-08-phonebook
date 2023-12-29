
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { fetchContacts } from 'api/api';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/ContactsFilter/Filter';
import { ContainerHeader, HeaderStyled } from 'components/Header/Header.styled';
import { UserMenu } from 'components/ContactsUserMenu/UserMenu';
import { Container, HeaderTitle, ContactsTitle, StyledDiv } from './Contacts.styled';
import { changeFilter } from 'redux/filterSlice';
import { deleteContact } from 'api/api';

const Contacts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const userEmail = useSelector(state => state.auth.user.email);
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate('/', { replace: true });
    } else {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn, navigate]);

  const onSubmitContact = (evt) => {
   
  };

  const onChangeInput = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  const filterByName = () => {
    return contacts.filter((contact) =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
  };

  const deletingContact = (evt) => {
    dispatch(deleteContact(evt.target.id));
  };

  const onLogout = () => {
  
  };

  return (
    <>
      <HeaderStyled>
        <ContainerHeader>
          <nav>
            <NavLink to="/contacts">Contacts</NavLink>
          </nav>
        </ContainerHeader>
      </HeaderStyled>
      <section>
        <Container>
          <UserMenu userEmail={userEmail} onLogout={onLogout} />
          <StyledDiv>
            <HeaderTitle>Phonebook</HeaderTitle>
            <ContactForm formSubmit={onSubmitContact} />
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter input={onChangeInput} />
            <ContactList
              contacts={contacts}
              filter={filter}
              filtering={filterByName}
              deleting={deletingContact}
            />
          </StyledDiv>
        </Container>
      </section>
    </>
  );
};

export default Contacts;



