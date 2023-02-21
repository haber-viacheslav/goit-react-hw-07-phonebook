import PropTypes from 'prop-types';
import { ContactItemButton, ContactItemWrp } from './ContactItem.styled';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContact(id));
  return (
    <ContactItemWrp>
      <p>
        {name}: <span>{number}</span>
      </p>
      <ContactItemButton onClick={handleDeleteContact}>
        delete
      </ContactItemButton>
    </ContactItemWrp>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default ContactItem;
