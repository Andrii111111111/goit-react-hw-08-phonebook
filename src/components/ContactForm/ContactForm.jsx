import PropTypes from 'prop-types';
import { addContact, fetchContacts } from 'api/api';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const submit = async (evt, dispatch, contacts) => {
  const formReset = () => {
    evt.target.name.value = '';
    evt.target.querySelector('input[type="tel"]').value = '';
  };
  const contactObject = {
    name: evt.target.name.value,
    number: evt.target.querySelector('input[type="tel"]').value,
  };
  if (
    contacts.find(
      contact => contact.name.toUpperCase() === contactObject.name.toUpperCase()
    )
  ) {
    toast.error(`${contactObject.name} is already in the contacts`);
  } else {
    await dispatch(addContact(contactObject));
    await dispatch(fetchContacts());
    toast.success(`${contactObject.name} added to contacts`);
  }
  await formReset();
};

export const ContactForm = ({ formSubmit }) => {
  return (
    <div>
      <Form onSubmit={formSubmit}>
        <Label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zAZа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Name"
            required
          />
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Number"
            required
          />
          <Button type="submit">Add new contact</Button>
        </Label>
      </Form>
      <ToastContainer />
    </div>
  );
};
ContactForm.propTypes = {
  formSubmit: PropTypes.func,
};