/**
 * @fileOverview Main application file
 */

import { useState } from 'react';
import './App.css';

/**
 * Main application component
 */
function App() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  /**
   * Event handler for form submission
   * @param {Event} event - form submit event
   */
  function handleForm(event) {
    event.preventDefault();

    if (
      values.email === '' ||
      values.firstName === '' ||
      values.lastName === '' ||
      values.password === ''
    ) {
      alert('Please fill in all fields');
      return;
    } else if (values.password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    } else if (values.length < 3 || values.length < 3) {
      alert('First and last name must be at least 3 characters');
      return;
    }

    if (values.password !== values.confirmPassword) {
      alert('Password and Confirm Password do not match');
    }
  }

  /**
   * Event handler for email input
   * @param {Event} event - input event
   */
  function handleEmailInput(event) {
    setValues({ ...values, email: event.target.value });
  }

  /**
   * Event handler for first name input
   * @param {Event} event - input event
   */
  function handleFirstNameInput(event) {
    setValues({ ...values, firstName: event.target.value });
  }

  /**
   * Event handler for last name input
   * @param {Event} event - input event
   */
  function handleLastNameInput(event) {
    setValues({ ...values, lastName: event.target.value });
  }

  /**
   * Event handler for password input
   * @param {Event} event - input event
   */
  function handlePasswordInput(event) {
    setValues({ ...values, password: event.target.value });
  }

  /**
   * Event handler for password confirmation input
   * @param {Event} event - input event
   */
  function handlePasswordConfirmationInput(event) {
    setValues({ ...values, confirmPassword: event.target.value });
  }

  return (
    <>
      <form className="form" onSubmit={handleForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleEmailInput}
            value={values.email}
          />
          <div id="emailHelp" className="form-text">
            We will never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            aria-describedby="userFirstName"
            onChange={handleFirstNameInput}
            value={values.firstName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            aria-describedby="userLastName"
            onChange={handleLastNameInput}
            value={values.lastName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handlePasswordInput}
            value={values.password}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordConfirmation" className="form-label ">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordConfirmation"
            onChange={handlePasswordConfirmationInput}
            value={values.confirmPassword}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
