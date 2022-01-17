const form =document.querySelector('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const mobile=document.getElementById('phoneNumber');

//form event listener
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    validation();
    location.reload();
});


// Error Function
const setError=(value,message)=>{
    const selectParent=value.parentElement;
    //console.log(selectParent);
    const errorSpan=selectParent.querySelector('span');
    errorSpan.innerHTML=message;
}

//success function
const setSuccess=(element,message)=>{
    setError(element,message);
}
//validation form function
const validation =()=>{

    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const mobileVal=mobile.value.trim();

    //validating  username input
    if(usernameVal === ''){
        setError(username,"Username Field Should Not Be Blank");
        return false;
    }else if(usernameVal.length < 2){
        console.log("cancel");
        setError(username,"Username Should be atleast 2 character");
        return false;
    }else{
        setSuccess(username,"");
    }

    //validating email input
    const emailRegExp =/^[A-Za-z0-9-]+@[A-Za-z]{3,}.[A-Za-z]{2,}$/;
    const emailResult=emailRegExp.test(emailVal);
    //console.log(emailResult);
    if(emailVal === ''){
        setError(email,"Email Field Should Not Be Blank");
        return false;
        
    }else if(emailResult == false){
        setError(email,"Email Is InValid");
        return false;
    }else{
        setSuccess(email,"");
    }

     //validating password input
     const passwordRegExp=/^(?=.*[@#$%^&-+=()])(?=.*[0-9])[A-Za-z0-9#@$.]{8,}$/;
     const passwordResult=passwordRegExp.test(passwordVal);

     if(passwordVal === ''){
        setError(password,"Password Field Should Not Be Blank");
        return false;
    }else if(passwordResult == false){
        setError(password,"Password Must Contain Special Character and Number and Length must be atleast 8 character");
        return false;
    }else{
        setSuccess(password,"");
    }

    //validating mobile input
    const mobileRegExp=/^[789][0-9]{9}$/;
    const mobileResult=mobileRegExp.test(mobileVal);

    if(mobileVal === ''){
        setError(mobile,"Mobile Number Should Not Be Blank");
        return false;
    }else if(mobileResult == false){
        setError(mobile,"Mobile Number Is Invalid");
        return false;
    }else{
        setSuccess(mobile,"");
        
    }



}



