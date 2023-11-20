import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
    const errNavig = useNavigate();
  return (
    <>
        <section className='errorpage'>
          <h1>404</h1>
            <h1>Error</h1>
            <button onClick={() => errNavig('/')}>Go Back</button>
        </section>
    </>
  )
}

export default Error
