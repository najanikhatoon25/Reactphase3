export default function validationForm(name,email,password){
   if(name===""){
    return "Name is required";
   }

    if(email===""){
    return " Email is required"
   }

    if(password===""){
    return "Password is required"
   }
    if(password.length<6){
    return "Password must be at least 6 characters"
   }
   return "";
}