import * as Yup from 'yup';

export const AddStuffSchema = Yup.object({
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const EditStuffSchema = Yup.object({
  id: Yup.number().required(),
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

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

export const EditContactSchema = Yup.object().shape({
  id: Yup.number().required(),
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  address: Yup.string().required('Address is required'),
  image: Yup.string().url('Image must be a valid URL').required('Image is required'),
  description: Yup.string().required('Description is required'),
  owner: Yup.string().required('Owner is required'),
});
