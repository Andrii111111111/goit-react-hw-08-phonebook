

import PropTypes from 'prop-types';
import { ListByContact, ListItem, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'api/api';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const filteringByName = () => {
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
  };

  const filteredContacts = filter.length > 0 ? filteringByName() : contacts;

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ListByContact>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <ListItem key={contact.id}>
            {contact.name}: {contact.number}
            <Button type="button" onClick={() => handleDelete(contact.id)}>
              Delete
            </Button>
          </ListItem>
        ))
      ) : (
        <ListItem>You don't have any contacts yet</ListItem>
      )}
    </ListByContact>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onDelete: PropTypes.func,
};



