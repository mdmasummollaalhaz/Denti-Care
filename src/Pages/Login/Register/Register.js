// import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useState } from 'react';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';
import { Form } from 'react-bootstrap';

const Register = () => {
  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate('/login');
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (user) {
    console.log('user', user);
  }

  const handleRegister = async event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    // if (agree) {
    //   createUserWithEmailAndPassword(email, password);
    // }

    // console.log(name, email, password);
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log('Updated profile');
    navigate('/home');
  };
  return (
    <div className="container form-box mx-auto register-form">
      <h2 style={{ textAlign: 'center' }} className="title">
        Register
      </h2>
      <form onSubmit={handleRegister}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter Your Password"
            required
          />
        </Form.Group>
        
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">
          Accept Denti-care <Link className='terms' to="/terms" target="_blank">Terms and condition</Link>
        </label>
        <input
          disabled={!agree}
          className="w-50 mx-auto btn btn primary mt-3"
          type="submit"
          value="Register"
        />
      </form>
      <p>
        Already have an account?{' '}
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please, login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
