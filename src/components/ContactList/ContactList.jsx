import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';
import { ContactListWrp } from './ContactList.styled';
import { selectContacts, selectFilterValue } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'components/helpers/getVisibleContacts';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterValue);
  const visibleContacts = getVisibleContacts(filter, contacts);

  return (
    <>
      {contacts.length > 0 && (
        <ContactListWrp>
          {visibleContacts.map(({ name, number, id }) => (
            <li key={id}>
              <ContactItem name={name} number={number} />
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
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
