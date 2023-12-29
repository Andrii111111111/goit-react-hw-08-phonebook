

import { CenteredContainer, Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <CenteredContainer>
      <Label>Find contacts by name</Label>
      <Input name="name" onChange={handleChange} placeholder="Name" />
    </CenteredContainer>
  );
};



