import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
    <h1 className='text-3xl text-center underline'>Login</h1>
<Link to='/home/assistants'>
        <button className='text-2xl text-black text-center'>Go to Next Page</button>
</Link>
    </div>
  )
}

export default Login