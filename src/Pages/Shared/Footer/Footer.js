import React from 'react'
import { Form } from 'react-bootstrap'
import './Footer.css'

export default function Footer() {
  return (
    <div className="container-fluid">
          <div className="row bg-dark text-white p-3 mt-5 overflow-hidden text-center">
            <div className="col-lg-4 col-12 overflow-hidden text-color">
              <h3 className='font'>Drone Craft</h3>
              <h4>Latest Posts</h4>
              <p>Nov 11, 2021</p>
              <p>How To Take Better Home?</p>
            </div>
            <div className="col-lg-4 col-12 mt-lg-0 mt-5 overflow-hidden text-center">
                <div style={{padding: '30px', textAlign: 'center'}}>
                    <img src="https://i.ibb.co/kDCjXwD/logo2.png" alt="" />
                </div>
                <h2>Subscribe to Newsletter</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className="control text-center" type="email" pleaseholder="Enter email" />
                        <button className="form-control control-2">Subscribe</button>                        
                    </Form.Group>
                </Form>
                <i className="fab fa-instagram me-4 hover"></i>
                <i className="fab fa-twitter me-4 hover"></i>
                <i className="fab fa-facebook me-4 hover"></i>
                <i className="fab fa-dribbble me-4 hover"></i>
                <i className="fab fa-linkedin-in hover"></i>
            </div>
            <div className="col-lg-4 col-12 mt-lg-0 mt-3 overflow-hidden text-color text-center">
                <h4 className="mb-3 font">The Company Name Inc</h4>
                <h5>9870 St Vincent Place,</h5>
                <h6>+8801738349069 || 800-2345-6799</h6>
                <h6>E-mail: melonali200@gmail.com</h6>
            </div>
            
          </div>
        </div>
  )
}
