import * as Yup from 'yup';

export interface Contact {
  id: any;
  firstName: string;
  lastName: string;
  address: string;
  image: string;
  description: string;
}

export const AddContactSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  address: Yup.string().required('Address is required'),
  image: Yup.string().url('Image must be a valid URL').required('Image is required'),
  description: Yup.string().required('Description is required'),
  owner: Yup.string().required('Owner is required'),
});

export const AddNoteSchema = Yup.object({
  note: Yup.string().required(),
  owner: Yup.string().required(),
  contactId: Yup.number().required(),
});

export const EditContactSchema = Yup.object().shape({
  id: Yup.number().required(),
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  address: Yup.string().required('Address is required'),
  image: Yup.string().url('Image must be a valid URL').required('Image is required'),
  description: Yup.string().required('Description is required'),
  owner: Yup.string().required('Owner is required'),
});
