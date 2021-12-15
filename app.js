const form=document.getElementById("form")
const username=document.getElementById("username")
const password=document.getElementById("password")
const email=document.getElementById("email")
const password2=document.getElementById("password2")

function checkInputs() {
    const usernameValue=username.value.trim();
    const passwordValue=password.value.trim();
    const emailValue=email.value.trim();
    const password2Value=password2.value.trim();

    if (usernameValue==="") {
        setErrorfor(username,"Username can not be blank")
        
    }else{
        setSuccessfull(username)

    }
    if (emailValue==="") {
        setErrorfor(email,"Email can not be blank")
        
    }else if(!isEmail(emailValue)){
        setErrorfor(email,"Email is not valid")

    }else{
        setSuccessfull(email)
    }
    if (passwordValue==="") {
        setErrorfor(password,"Password can not be blank") 
    }else{
        setSuccessfull(password)
    }
    if (password2Value==="") {
        setErrorfor(password2,"Password can not be blank")   
    }else if(passwordValue!==password2Value){
        setErrorfor(password2,"Password does not match")
    }else{
        setSuccessfull(password2)
    }
    
}


function isEmail(email) {
    return /@/.test(email)
    
}


function setErrorfor(input,message) {
    const formcontrol=input.parentElement;
    const small=formcontrol.querySelector('small')

    small.innerText=message

    formcontrol.className='form-control error'

    
}
function setSuccessfull(input) {
    const formcontrol=input.parentElement;

    formcontrol.className='form-control success'
    
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    checkInputs()
})

