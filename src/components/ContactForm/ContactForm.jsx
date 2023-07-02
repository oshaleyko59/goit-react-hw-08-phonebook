import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { SubmitBtn, Form, Label, Input } from './styled';
import { useContacts } from '../../hooks/useContacts';

const isAlreadyInContacts = (contacts, newContact) => {
  const res= contacts.some(
    contact =>
      contact.name.toLocaleLowerCase() === newContact.name.toLowerCase()
  );
  return res;
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { onAddContact, allContacts } = useContacts();

  const onSubmit = async e => {
    e.preventDefault();

    const form = e.target;
    const newContact = {
      name: form.elements.name.value
        .split(' ')
        .filter(word => word !== '')
        .join(' '),
      number: form.elements.number.value,
    };
    if (isAlreadyInContacts(allContacts, newContact)) {
      dispatch(setFilter(newContact.name.toLowerCase()));
      toast.error(`${newContact.name} is in your Contacts`);
      return;
    }

    onAddContact(newContact);
    //TODO: ??? dispatch(setFilter(''));
    form.reset();
  }

  return (
    <Form onSubmit={onSubmit} >
      <Label>
        Name
        <Input
          type="text"
          name="name"
          autoComplete="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          autoComplete="tel"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <SubmitBtn type="submit">Add</SubmitBtn>
    </Form>
  );
};
