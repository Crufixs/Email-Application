import { Button, Accordion, Card, Row, Col } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <Button
      type="button"
      style={{ backgroundColor: "black" }}
      onClick={decoratedOnClick}
    >
      {children}
    </Button>
  );
}

const EmailComponent = ({ emails }) => {
  console.log("THE EMAILS IN EMAIL COMPONENTER: ");
  console.log(emails);
  return (
    <Accordion defaultActiveKey="0">
      {emails.map((email) => (
        <Card>
          <Card.Header>
            <Row className="align-items-center">
              <Col className="col-auto d-flex align-items-center">
                <svg
                  className="mx-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-grip-vertical"
                  viewBox="0 0 16 16"
                  preserveAspectRatio="xMidYMin"
                >
                  <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                <input className="mx-2 rawr" type="checkbox"></input>
                <svg
                  className="mx-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="green"
                  class="bi bi-circle-fill"
                  preserveAspectRatio="xMidYMin"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div class="date mx-2">
                  <p class="month">{email.date[1]}</p>
                  <p class="day">Jan</p>
                </div>
                <div className="circle">X</div>
              </Col>
              <Col>
                <Row>
                  <Col className="heading col-12">email.subject</Col>
                  <Col className="subheading col-12">
                    From, Date, Attachment?
                  </Col>
                </Row>
              </Col>
              <Col className="text-end col-auto">
                <CustomToggle eventKey="0">Click me!</CustomToggle>
              </Col>
            </Row>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Row>
                <Col xs={6} className="text-start">
                  From
                </Col>
                <Col xs={6} className="text-end">
                  Tags
                </Col>
                <Col xs={12}>Text body</Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

export default EmailComponent;
