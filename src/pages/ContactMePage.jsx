import { useState, useEffect } from 'react';

export default function ContactMePage() {
  // Prior to the return statement, our homepage uses a few react hooks and fetchData function to query to a mock database and retrieve random user data
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [nameErr, setNameErr] = useState(false)
  const [emailErr, setEmailErr] = useState(false)
  const [messageErr, setMessageErr] = useState(false)

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    if (!input.name) {
      setNameErr(true);
    }
    if (!input.email) {
      setEmailErr(true);
    }
    if (!input.message) {
      setMessageErr(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setInput({
      name: '',
      email: '',
      message: '',
    });
  };
  
  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className='form-container'>
      <h2 className='text-center'>Contact Me</h2>
      <form className="container d-flex flex-column" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="form-control input-cstm"
          value={input.name}
          // onBlur={handleBlur}
          onChange={handleChange}
        ></input>
        {/* <p>{nameErr ? 'please fillout name' : ''}</p> */}
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="form-control input-cstm"
          value={input.email}
          onBlur={handleBlur}
          onChange={handleChange}
        ></input>
        <p>{emailErr ? 'please fillout email' : ''}</p>
        <textarea
          name="message" 
          className='form-control input-cstm'
          placeholder="Message"
          id="" 
          cols="30" 
          rows="10"
          value={input.message}
          // onBlur={handleBlur}
          onChange={handleChange}
        ></textarea>
        {/* <p>{messageErr ? 'please fillout message' : ''}</p> */}
        <button type='submit' className='btn btn-primary input-cstm'>
          Submit
        </button>
      </form>
    </div>
  );
}



