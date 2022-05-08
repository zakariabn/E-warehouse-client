import { async } from '@firebase/util';
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const EmailVerification = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);


  
  if(user?.emailVerified) {
    navigate('/add-stock')
  }

  async function handelSendVerification () {
    await sendEmailVerification ();
    toast('Sending Email verification link');
  }

  return (
    <div>
      <h1>hy {user?.displayName || 'User'}</h1>
      <h1>Your email is not verified</h1>
      <h1>Please verify your email</h1>
      <button onClick={handelSendVerification}>Verify Email</button>
    </div>
  );
};

export default EmailVerification;