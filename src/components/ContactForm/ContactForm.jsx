import { Formik } from 'formik';
import { string, object } from 'yup';
import 'yup-phone';
import { addContact } from 'redux/contactService';
import { useDispatch } from 'react-redux';
import {
  FormWrap,
  FormErrorMessage,
  FormInput,
  FormLabel,
  FormInputWrp,
  FormButton,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  phone: '',
};

const schema = object().shape({
  name: string().trim().strict().required(),
  phone: string().phone('UA').required(),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
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
