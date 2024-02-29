
const log_button = document.querySelector('#login-form')
const User="AdminSEF123"
const Password="SeF@ctORy$$456"




log_button.addEventListener('submit',function(){
    const user=document.querySelector('#user').value
    const password=document.querySelector('#password').value
    if(User !=  user.trim()){
        const error=document.querySelector('#user-err');
        error.style.display=block;
    }else if(Password != password){
        const error=document.querySelector('#pass-err');
        error.style.display=block;
    }else{
        window.location.href=''
    }
})