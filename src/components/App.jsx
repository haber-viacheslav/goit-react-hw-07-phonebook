import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactService';
import { selectError, selectIsLoading } from 'redux/selectors';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Toaster } from 'react-hot-toast';
import { toasterMessages } from './notification/toasterMessages';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectError);
  const error = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  toasterMessages(isLoading, error);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
