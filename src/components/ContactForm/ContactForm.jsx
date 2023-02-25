import { Formik } from 'formik';
import { string, object } from 'yup';
import 'yup-phone';
import { addContact } from 'redux/contactService';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  FormWrap,
  FormErrorMessage,
  FormInput,
  FormLabel,
  FormInputWrp,
  FormButton,
} from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';
import { checkContact, checkPhone } from 'components/helpers/formCheckers';

// Initial values for formik
const initialValues = {
  name: '',
  phone: '',
};
// Yup schema
const schema = object().shape({
  name: string().trim().strict().required(),
  phone: string().phone('UA').required(),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = (values, { resetForm }) => {
    if (checkContact(contacts, values)) {
      alert(`${values.name} is already in contacts`);
      return;
    }
    if (checkPhone(contacts, values)) {
      alert(`${values.phone} is already in contacts`);
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormWrap autoComplete="off">
        <FormInputWrp htmlFor="name">
          <FormLabel>Name</FormLabel>
          <FormInput type="text" name="name" />
          <FormErrorMessage name="name" component="div" />
        </FormInputWrp>

        <FormInputWrp htmlFor="phone">
          <FormLabel>Phone</FormLabel>
          <FormInput type="tel" name="phone" />
          <FormErrorMessage name="phone" component="div" />
        </FormInputWrp>

        <FormButton type="submit">Add contact</FormButton>
      </FormWrap>
    </Formik>
  );
};

export default ContactForm;
