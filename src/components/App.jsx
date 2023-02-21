import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex-start',
        padding: '40px',
        flexDirection: 'column',
        gap: '40px',
        color: '#ffffff',
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
