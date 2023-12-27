import PropTypes from 'prop-types';
import { ListByContact, ListItem, Button } from './ContactList.styled';

export const ContactList = ({ contacts, filter, filtering, deleting }) => {
  const filteringByName = filtering();
  return (
    <ListByContact>
      {contacts.length > 0 ? (
        filter.length > 0 ? (
          filteringByName.map(contact => {
            return (
              <ListItem key={contact.id}>
                {contact.name}: {contact.number}
                <Button type="Button" id={contact.id} onClick={deleting}>
                  Delete
                </Button>
              </ListItem>
            );
          })
        ) : (
          contacts.map(contact => {
            return (
              <ListItem key={contact.id}>
                {contact.name}: {contact.number}
                <Button type="button" id={contact.id} onClick={deleting}>
                  Delete
                </Button>
              </ListItem>
            );
          })
        )
      ) : (
        <ListItem>You dont have any contacts yet</ListItem>
      )}
    </ListByContact>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  filtering: PropTypes.func,
  deleting: PropTypes.func,
};