
import { useSelector } from 'react-redux';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, fetchContacts } from 'api/api';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const contactObject = {
      name,
      number,
    };

    if (
      contacts.find(
        (contact) =>
          contact.name.toUpperCase() === contactObject.name.toUpperCase()
      )
    ) {
      toast.error(`${contactObject.name} is already in the contacts`);
    } else {
      await dispatch(addContact(contactObject));
      await dispatch(fetchContacts());
      toast.success(`${contactObject.name} added to contacts`);
    }

    formReset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zAZа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Number"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <Button type="submit">Add new contact</Button>
        </Label>
      </Form>
      <ToastContainer />
    </div>
  );
};



