import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css";
// import { useDispatch } from 'react-redux';
// import { login } from '../user';
function RegistrationForm() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();
  // const [pname, setPname] = useState('');
  // const dispatch = useDispatch();


  // const handleChange = (e) => {
  //   setPname(e.target.value);
  // }


  const loginHandler = (e) => { 
    e.preventDefault();
    navigate('/Navbar');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className='registration-page'>

    <form className="form" onSubmit={handleSubmit}>
      <p className="title">Register</p>
      <p className="message">Signup now and get full access to our app.</p>
      <div className="flex">
        <label>
          <input
            required
            placeholder="Firstname"
            type="text"
            className="input"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
          />
        </label>

        <label>
          <input
            required
            placeholder="Lastname"
            type="text"
            className="input-1"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
          />
        </label>
      </div>

      <label>
        <input
          required
          placeholder="Email"
          type="email"
          className="input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>

      <label>
        <input
          required
          placeholder="Password"
          type="password"
          className="input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>

      <label>
        <input
          required
          placeholder="Confirm Password"
          type="password"
          className="input"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </label>
      <Link to="/Home">

      <button type="submit" className="bo" id='bo'>
                    <span className="xo">
                        Submit
                    </span>
                </button>

      </Link>
      <Link to="/">Already have an Account? Sign In</Link>
    </form>
    </div>
  );
}

export default RegistrationForm;
