import React from 'react';
import { HeaderNav, HeaderWrap } from './Header.styled';
import { Container } from '@mui/material';
import { AuthNav } from 'components/AutnNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
 
  return (
    <HeaderWrap>
      <Container>
        <HeaderNav>
          <Navigation />
          {isLoggedIn ? 
          <UserMenu /> : <AuthNav />
           } 
        </HeaderNav>
      </Container>
    </HeaderWrap>
  );
};