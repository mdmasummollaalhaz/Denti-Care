import React from 'react';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="container form-box mx-auto register-form">
      <h2 style={{ textAlign: 'center' }} className="title">
        Billing Details
      </h2>
      <form>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="Address"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="Town/city"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="State"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="Zip"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="Phone"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </Form.Group>
        <div className='radioBtn'>
          <input type="radio"/> Bkash
          <input type="radio"/> Hand-Cash
        </div>
        <input
          className="w-50 mx-auto btn btn primary mt-3"
          type="submit"
          value="Confirm!"
        />
      </form>
    </div>
  );
};

export default Checkout;
