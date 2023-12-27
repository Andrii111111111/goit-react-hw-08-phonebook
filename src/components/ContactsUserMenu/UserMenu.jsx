import { UserContainer, MailUser, Button } from './UserMenu.styled';

export const UserMenu = ({ userEmail, onLogout }) => {
  return (
    <UserContainer>
      <MailUser>{userEmail}</MailUser>
      <Button onClick={onLogout}>Logout</Button>
    </UserContainer>
  );
};