'use client';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import { editContact } from '@/lib/dbActions';
import { EditContactSchema } from '@/lib/validationSchemas';

const onSubmit = async (data: {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  image: string;
  description: string;
  owner: string;
}) => {
  await editContact(data);
  swal('Success', 'Your contact has been updated', 'success', {
    timer: 2000,
  });
};

const EditContactForm = ({ contact }: { contact: any }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EditContactSchema),
    defaultValues: {
      firstName: contact.firstName,
      lastName: contact.lastName,
      address: contact.address,
      image: contact.image,
      description: contact.description,
    },
  });

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          {' '}
          {/* Updated to xs={10} */}
          <Col className="text-center">
            <h2>Edit Contact</h2>
            {' '}
            {/* Updated header */}
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register('id')} value={contact.id} />
                <Row>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <input
                        type="text"
                        {...register('firstName')}
                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                        defaultValue={contact.firstName}
                      />
                      <div className="invalid-feedback">{errors.firstName?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <input
                        type="text"
                        {...register('lastName')}
                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                        defaultValue={contact.lastName}
                      />
                      <div className="invalid-feedback">{errors.lastName?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Address</Form.Label>
                      <input
                        type="text"
                        {...register('address')}
                        className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                        defaultValue={contact.address}
                      />
                      <div className="invalid-feedback">{errors.address?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label>Image</Form.Label>
                      <input
                        type="text"
                        {...register('image')}
                        className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                        defaultValue={contact.image}
                      />
                      <div className="invalid-feedback">{errors.image?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <textarea
                    {...register('description')}
                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                    defaultValue={contact.description}
                  />
                  <div className="invalid-feedback">{errors.description?.message}</div>
                </Form.Group>

                <input type="hidden" {...register('owner')} value={contact.owner} />

                <Form.Group className="form-group">
                  <Row className="pt-3">
                    <Col>
                      <Button type="submit" variant="primary">
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button type="button" onClick={() => reset()} variant="warning" className="float-right">
                        Reset
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditContactForm;
