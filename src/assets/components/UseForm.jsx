import { useEffect, useState } from "react"
import Validations from "./Validations"

const UseForm=(submitForm)=>{
const [values,setValues]=useState({
    fullname:"",
    email:"",
    password:"",
})

const [errors,setErrors]=useState({})
const [dataIsCorrect, setDataIsCorrect]=useState(false)

const handleChange=(event)=>{
    setValues({...values,
    [event.target.name]:event.target.value,
    })
}
const handleFormSubmit=(event)=>{
    event.preventDefault()
    setErrors(Validations(values))
    setDataIsCorrect(true)
}
useEffect(()=>{
    if(Object.keys(errors).length===0 && dataIsCorrect){
        submitForm(true)
    }
},[errors])
return {handleChange, handleFormSubmit, values, errors}
}
export default UseForm;