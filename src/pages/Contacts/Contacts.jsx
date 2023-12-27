import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { fetchContacts } from 'api/api';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/ContactsFilter/Filter';
import { ContainerHeader, HeaderStyled } from 'components/Header/Header.styled';
import { UserMenu } from 'components/ContactsUserMenu/UserMenu';
import {
  Container,
  HeaderTitle,
  ContactsTitle,
  StyledDiv,
} from './Contacts.styled';

const Contacts = ({
  onSubmitContact,
  onChangeInput,
  contacts,
  filter,
  filterByName,
  deletingContact,
  userEmail,
  onLogout,
  isLoggedIn,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoggedIn) {
      return navigate('/', { replace: true });
    } else {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn, navigate]);
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