

const Validations = (values) => {
    let errors={}
    if(!values.fullname){
        errors.fullname="isim boş bırakılamaz!"
    }
    
    if(!values.email){
        errors.email="email boş bırakılamaz!"
    }
    
   else if(!/\S+@\S+\.\S+/.test(values.email))
  { errors.email="email adresini doğru girin!"}
    
   if(!values.password){
    errors.password="parola boş bırakılamaz"
}else if(values.password.length<5){
    errors.password="parola beş karakterden uzun olmalı!"
}
  return errors;
}

export default Validations