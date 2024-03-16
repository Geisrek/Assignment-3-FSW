
const log_button = document.querySelector('#loger')
const User="AdminSEF123"
const Password="SeF@ctORy$$456"


/** this error keep appear for me when i use my queries methods :
 *  POST http://127.0.0.1:5501/todo-frontend/Assignment-3-FSW/localhost/Todo/phpscripts/signin.php net::ERR_ABORTED 405 (Method Not
 * i know her must receive a JSON object and continue my process as usual */

log_button.addEventListener('click',function(){
    const email=document.querySelector('#user').value
    const password=document.querySelector('#password').value
    const formData=new FormData();
    try{
    const signin=async (email,password)=>{
        formData.append('email',email);
        formData.append('password',password)
        const response=await fetch(`localhost/Todo/phpscripts/signin.php/`,{
            method:"POST",
           
            body:formData
            
        })
    
    return await response
    }
    const ss=  signin(email,password);
    console.log(ss);

}
    catch(err){
        console.log(err);
    }
    //console.log(signin)
   /* if(User !=  user.trim()){
        const error=document.querySelector('#user-err');
        error.style.display=block;
        
    }else if(Password != password.trim()){
        const error=document.querySelector('#pass-err');
        error.style.display=block;
        
    }else{
        
        window.location.href='./pages/main.html'
        
    }*/
})