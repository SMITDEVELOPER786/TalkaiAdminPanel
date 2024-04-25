import React from 'react'
import { TailSpin } from 'react-loader-spinner'

function Loading() {
  return (
    <div className='flex justify-center my-60'>
    
    <TailSpin
  visible={true}

  height="80"
  width="80"
  color="#FE7E29"
  ariaLabel="tail-spin-loading"
  radius="1"
  
  wrapperStyle={{}}
  wrapperClass=""
  />
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Loading