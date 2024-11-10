import { getServerSession } from 'next-auth';
import { Col, Container, Row } from 'react-bootstrap';
// import { prisma } from '@/lib/prisma';
// import StuffItem from '@/components/StuffItem';
import { prisma } from '@/lib/prisma';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import ContactCard from '@/components/ContactCard';
import { Contact } from '@prisma/client';

/** Render a list of contacts for the logged in user. */
const ListPage = async () => {
  // Protect the page, only logged-in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(session);

  // Get the email of the logged-in user
  const owner = session?.user!.email;

  // Fetch contacts for the current user from Prisma
  const contacts: Contact[] = await prisma.contact.findMany({
    where: {
      owner,
    },
  });
  const notes = await prisma.note.findMany({
    where: {
      owner,
    },

  });

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">List Contacts</h1>
              <Row xs={1} md={2} lg={3} className="g-4">
                {contacts.map((contact) => (
                  <Col key={contact.id}>
                    <ContactCard contact={contact} notes={notes.filter(note => (note.contactId === contact.id))} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </main>
  );
};

export default ListPage;
