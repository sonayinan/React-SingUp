import React, { useState } from 'react'
import SingupForm from './SingupForm'
import SingupFormSucces from './SingupFormSucces'

const Forms = () => {
    const [formisSubmitted, setformisSubmitted]=useState(false)

    const submitForm=()=>{
        setformisSubmitted(true)
    }
  return (
    <div>
        {!formisSubmitted ? <SingupForm submitForm={submitForm}/>: <SingupFormSucces/>}
    </div>
  )
}

export default Forms