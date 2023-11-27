import { useState, useEffect } from 'react';

export default function ContactMePage() {
  // Prior to the return statement, our homepage uses a few react hooks and fetchData function to query to a mock database and retrieve random user data
  const [input, setInput] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!eagerness) {
    //   eagerness = 'low';
    // }

    

    setInput('');
  };

  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className='form-container'>
      <h2 className='text-center'>Contact Me</h2>
      <form className="container d-flex flex-column" onSubmit={() => handleSubmit()}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="form-control input-cstm"
        ></input>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="form-control input-cstm"
        ></input>
        <textarea
          name="message" 
          className='form-control input-cstm'
          placeholder="Message"
          id="" 
          cols="30" 
          rows="10"
        ></textarea>
        <button className='btn btn-primary input-cstm'>
          Submit
        </button>
      </form>
    </div>
  );
}
