'use client';

import { Contact } from '@/lib/validationSchemas';
import { Card, Image, ListGroup } from 'react-bootstrap';
import Link from 'next/link'; // Import Link from next/link
import NoteItem from '@/components/NoteItem';
import AddNoteForm from './AddNoteForm';

/* Renders a List Contact table. See list/page.tsx. */
const ContactCard = ({ contact, notes }: { contact: Contact; notes: Note[] }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={contact.image} width={75} />
      <Card.Title>
        {contact.firstName}
        {contact.lastName}
      </Card.Title>
      <Card.Subtitle>{contact.address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
      <ListGroup variant="flush">
        {notes.map((note) => <NoteItem key={note.id} note={note} />)}
      </ListGroup>
      <AddNoteForm contact={contact} />
    </Card.Body>
    <Card.Footer>
      {/* Add the Edit link here */}
      <Link href={`/edit/${contact.id}`}>Edit</Link>
    </Card.Footer>
  </Card>
);

export default ContactCard;
