const formlog = document.getElementById('loginForm')
const email = document.getElementById('emailLogin')
const password = document.getElementById('passwordLogin')


formlog.addEventListener("submit",(e)=>{
e.preventDefault()
validlogin()
})


const validlogin = () =>{
    if(email.value == ""){
        result.innerHTML= "Enter your email address*"
        return false
    }
    if(password.value == ""){
        result.innerHTML= "Enter your password*"
        return false
    }
    if (email.value !== "" && password.value !== "" ){
        window.location.assign('/src/timely/timely.html')
    }
}