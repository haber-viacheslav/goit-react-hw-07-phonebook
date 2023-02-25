import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';
import { ContactListWrp } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      {visibleContacts.length > 0 && (
        <ContactListWrp>
          {visibleContacts.map(contact => (
            <li key={contact.id}>
              <ContactItem contact={contact} />
            </li>
          ))}
        </ContactListWrp>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
