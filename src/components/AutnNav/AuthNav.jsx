import { NavLink } from "react-router-dom";
import { AuthNavWrap } from "./AuthNav.styled";

export const AuthNav = () => {
  const styleNav = ({ isActive }) => ({
    color: isActive ? 'tomato' : 'white'
  });

    return (
      <AuthNavWrap>
        <NavLink  style={styleNav} to="/registration">
          Register
        </NavLink>
        <NavLink  style={styleNav} to="/login">
          Log In
        </NavLink>
      </AuthNavWrap>
    );
  };