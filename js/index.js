
const log_button = document.querySelector('#login-form')
const User="AdminSEF123"
const Password="SeF@ctORy$$456"




log_button.addEventListener('click',function(){
    const user=document.querySelector('#user').value
    const password=document.querySelector('#password').value
    if(User !=  user.trim()){
        const error=document.querySelector('#user-err');
        error.style.display=block;
        
    }else if(Password != password.trim()){
        const error=document.querySelector('#pass-err');
        error.style.display=block;
        
    }else{
        
        window.location.href='./pages/main.html'
        
    }
})