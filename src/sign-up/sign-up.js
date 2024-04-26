const form = document.getElementById('Formfill')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const cpassword = document.getElementById('cpassword')
const result = document.getElementById('result')
const btn = document.getElementById('btn')


const validation = () =>{
    if(username.value == ""){
        result.innerHTML= "Enter your username*"
        return false
    }
    if(email.value == ""){
        result.innerHTML= "Enter your email address*"
        return false
    }
    if(password.value == ""){
        result.innerHTML= "Enter your password*"
        return false
    }
    if(password.value.length < 7){
        result.innerHTML= "Password is too weak*"
        return false
    }
    if(password.value != cpassword.value){
        result.innerHTML= "Passwords don't match*"
        return false
    }
    if(cpassword.value == ""){
        result.innerHTML= "Confirm password*"
        return false
    }
    if(username.value !== "" && email.value !== "" && password.value == cpassword.value){
        window.location.assign('/src/timely/timely.html');
        alert('Login Successfully')
        form.reset()
    }
}

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    validation()
})
const navlog = ()=>{
window.location.assign('/src/Login/login.html')
}

console.log(form)

