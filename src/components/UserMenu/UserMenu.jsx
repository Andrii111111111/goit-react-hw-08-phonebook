import { Box, Button } from '@mui/material';
import { AuthNavWrap } from 'components/AutnNav/AuthNav.styled';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <AuthNavWrap>
      <p className='userName'> {user.name}</p>
      <Box sx={{ '& button': { m: 1 } }}>
      <Button size="medium" color="primary" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button></Box>
    </AuthNavWrap>
  );
};