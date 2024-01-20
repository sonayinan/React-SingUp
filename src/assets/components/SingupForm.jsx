import React, { useEffect, useState } from 'react'
import UseForm from "./UseForm"
const SingupForm = ({submitForm}) => {
  
    const {handleChange, handleFormSubmit, values, errors}=UseForm(submitForm)
  return (
    <div className='container'>
        <div className="app-wrapper">
            <div>
                <h2 className='title'>Create account</h2>
            </div>
            <form className='form-wrapper'>
                <div className="name">
                    <label className='label'>Adınızı girin</label>
                    <input type="text" className='input' name='fullname' value={values.fullname} onChange={handleChange}/>
                    {errors.fullname && <p className='error'>{errors.fullname}</p>}
                </div>
                <div className="email">
                    <label className='label'>E-mail</label>
                    <input type="email" className='input' name='email' value={values.email} onChange={handleChange} />
                    {errors.email && <p className='error'>{errors.email}</p>}
                </div>
                <div className="password">
                    <label className='label'>Parola</label>
                    <input type="password" className='input' name='password' value={values.password} onChange={handleChange} />
                    {errors.password && <p className='error'>{errors.password}</p>}
                </div>
                <button className='submit' onClick={handleFormSubmit}>Giriş Yap</button>
            </form>
        </div>

    </div>
  )
}

export default SingupForm