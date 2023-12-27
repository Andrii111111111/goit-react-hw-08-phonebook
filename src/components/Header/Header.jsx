import { NavLink } from 'react-router-dom';
import {
  Container,
  ContainerHeader,
  HeaderStyled,
  HeaderTitle,
} from './Header.styled';

const Navigation = ({ isLoggedIn, userName }) => {
  return isLoggedIn ? (
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
          {' '}
          <h1>Welcome back {userName}</h1>
        </Container>
      </section>
    </>
  ) : (
    <>
      <HeaderStyled>
        <ContainerHeader>
          <nav>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </nav>
        </ContainerHeader>
      </HeaderStyled>
      <section>
        <Container>
          {' '}
          <HeaderTitle>
            "Welcome! To start managing your contacts, please log in or
            register."
          </HeaderTitle>
        </Container>
      </section>
    </>
  );
};
export default Navigation;