'use client';

import { Contact } from '@/lib/validationSchemas';
import { Card, Image } from 'react-bootstrap';
import Link from 'next/link'; // Import Link from next/link

/* Renders a List Contact table. See list/page.tsx. */
const ContactCard = ({ contact }: { contact: Contact }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={contact.image} width={75} />
      <Card.Title>
        {contact.firstName} {contact.lastName}
      </Card.Title>
      <Card.Subtitle>{contact.address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
    </Card.Body>
    <Card.Footer>
      {/* Add the Edit link here */}
      <Link href={`/edit/${contact.id}`}>Edit</Link>
    </Card.Footer>
  </Card>
);

export default ContactCard;
