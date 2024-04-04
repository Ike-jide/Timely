let form = document.getElementById('Formfill')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let cpassword = document.getElementById('cpassword')
let result = document.getElementById('result')
let btn = document.getElementById('btn')

const info = () =>{
   let infoName =username.value
   let infoEmail =email.value
   let infoPassword =password.value

   console.log(infoName)
   console.log(infoEmail)
   console.log(infoPassword)
   

}
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
        window.location.assign('timely.html');
        alert('Login Successfully')
    }
}



