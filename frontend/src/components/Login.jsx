// import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../CSS/Login.css"

    function Login () {
      return (
    <div className='l1'>
        <h3>MEDSPRINT</h3>
        <Form className='l2'>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="outline-dark">Log-in</Button>{' '}
        </Form>
    </div>   
      );
    }
    
    export default Login;
    
    


