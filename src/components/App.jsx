import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactService';
import { selectError, selectIsLoading } from 'redux/selectors';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectError);
  const error = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && <p>Loading tasks...</p>}
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {error && <p>{error}</p>}
    </div>
  );
};
