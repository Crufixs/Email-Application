import { Button, Accordion, Card, Row, Col } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <Button
      type="button"
      style={{ border: 0, backgroundColor: "white" }}
      onClick={decoratedOnClick}
    >
      {children}
    </Button>
  );
}

const EmailComponent = ({ emails, handleChange }) => {
  console.log("THE EMAILS IN EMAIL COMPONENT: ");
  console.log(emails);

  return (
    <Accordion defaultActiveKey="0">
      {emails.map((email) => (
        <Card key={email.id} className="my-1">
          <Card.Header className="bg-white">
            <Row className="align-items-center">
              <Col className="col-auto d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-grip-vertical mx-1"
                  viewBox="0 0 16 16"
                  preserveAspectRatio="xMidYMin"
                >
                  <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                <input
                  id={email.id}
                  className="mx-2 rawr"
                  type="checkbox"
                  onChange={handleChange}
                ></input>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="green"
                  className="mx-1bi bi-circle-fill"
                  preserveAspectRatio="xMidYMin"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div className="date mx-2 bg-light">
                  <p className="month">{email.date[1]}</p>
                  <p className="day">{email.date[0].substring(0, 3)}</p>
                </div>
                <div className="circle bg-secondary">
                  {email.sender[1].substring(0, 1)}
                </div>
              </Col>
              <Col>
                <Row>
                  <Col className="heading col-12">{email.emailSubject}</Col>
                  <Col className="subheading col-12">
                    <span>{email.sender[0] + " " + email.sender[1]}</span>
                    <span>{" <" + email.sender[2] + "> "}</span>
                    <span>
                      {email.date[0] +
                        " " +
                        email.date[1] +
                        ", " +
                        email.date[2]}
                    </span>
                  </Col>
                </Row>
              </Col>
              <Col className="text-end col-auto">
                <CustomToggle eventKey={email.id}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="black"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </CustomToggle>
              </Col>
            </Row>
          </Card.Header>
          <Accordion.Collapse eventKey={email.id}>
            <Card.Body>
              <Row>
                <Col xs={6} className="text-start">
                  <p>
                    {email.sender[0] + " " + email.sender[1]}
                    <br></br>
                    {email.date[0] + " " + email.date[1] + ", " + email.date[2]}
                  </p>
                </Col>
                <Col xs={6} className="text-end">
                  {email.tags.map((tag) => (
                    <Button className="m-1" size="sm" variant="outline-primary">
                      {tag}
                    </Button>
                  ))}
                </Col>
                <Col xs={12}>{email.content}</Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

export default EmailComponent;
