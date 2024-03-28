import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../CSS/Signup.css"

function SignUp() {
   return(
      <div className='s1'>
        <h3>MEDSPRINT</h3>
        <Form className='s2'>
        <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="outline-dark">Sign-Up</Button>{' '}
        </Form>
    </div>   
   )  
}

export default SignUp 