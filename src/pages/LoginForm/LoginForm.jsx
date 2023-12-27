import { ContainerHeader, HeaderStyled } from 'components/Header/Header.styled';
import { NavLink, useNavigate } from 'react-router-dom';
import { ContainerLoginDiv } from './LoginForm.styled';
import { useEffect } from 'react';

const LoginForm = ({ onLogin, isLoggedIn }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts', { replace: true });
    }
  }, [navigate, isLoggedIn]);
  return (
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
        <ContainerLoginDiv>
          <form onSubmit={onLogin}>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        </ContainerLoginDiv>
      </section>
    </>
  );
};
export default LoginForm;