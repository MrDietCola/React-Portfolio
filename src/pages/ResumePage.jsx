import { useState, useEffect } from 'react';
import resume from '../assets/AlexSeidlerResume.pdf'
// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL

export default function ResumePage() {
  return (
    <><div className='container p-5'>
      <h2>Resume</h2>
      <p>Click the link below to download my Resume!</p>
      <a href={resume} download>
        Download PDF
      </a>
    </div>
    </>
  );
}
