

import { useDispatch, useSelector } from 'react-redux';
import { UserContainer, MailUser, Button } from './UserMenu.styled';
import { logOut } from 'api/api';

export const UserMenu = () => {
  const userEmail = useSelector(state => state.auth.user.email);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(logOut());
  };

  return (
    <UserContainer>
      <MailUser>{userEmail}</MailUser>
      <Button onClick={handleLogout}>Logout</Button>
    </UserContainer>
  );
};




