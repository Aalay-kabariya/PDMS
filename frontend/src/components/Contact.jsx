import Form from "react-bootstrap/Form";

function Contact() {

    
  return (
    <div className="contact">
        <Form>
        <Form.Group className="mb-3 contact-form-item" controlId="exampleForm.ControlInput1">
            
            <Form.Control type="text" placeholder="NAME" />
        </Form.Group>
        <Form.Group className="mb-3 contact-form-item" controlId="exampleForm.ControlInput1">
            
            <Form.Control type="email" placeholder="E-MAIL" />
        </Form.Group>
        <Form.Group className="mb-1 contact-form-item" controlId="exampleForm.ControlTextarea1">
            
            <Form.Control as="textarea" rows={8} placeholder="MESSAGE" />
        </Form.Group>
        <button className="contact-button">SEND</button>
        </Form>
    </div>
  );
}
export default Contact;
