import PropTypes from 'prop-types';
import {
  ContactItemButton,
  ContactItemWrp,
  ContactName,
  ContactPhone,
} from './ContactItem.styled';
import { deleteContact } from 'redux/contactService';
import { useDispatch } from 'react-redux';

const ContactItem = ({ contact: { name, phone, id } }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContact(id));
  return (
    <ContactItemWrp>
      <ContactName>
        {name}: <ContactPhone>{phone}</ContactPhone>
      </ContactName>
      <ContactItemButton onClick={handleDeleteContact}>
        delete
      </ContactItemButton>
    </ContactItemWrp>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  id: PropTypes.string,
};

export default ContactItem;
