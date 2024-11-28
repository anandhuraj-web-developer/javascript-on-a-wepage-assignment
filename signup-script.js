let form = document.getElementById("forms");
form.addEventListener('submit' ,  (event)=>{
    event.preventDefault();
   let isvalid = true;

   document.getElementById('nameerror').innerText = "" ;
   document.getElementById('emailerror').innerText = "" ;
   document.getElementById('passworderror').innerText = "" ;
   document.getElementById('confirmpassworderror').innerText = "" ;
   

   
   const name = form['InputName'].value ;
    const email = form['InputEmail'].value ;
    const password = form['InputPassword'].value ;
    const confirmpassword = form['InputconfirmPassword'].value ;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,20}$/;

   
    if(name.trim().length < 3){
        const nameerror = document.getElementById('nameerror');
        nameerror.innerText = 'name should conatain atleast three letter ';
        isvalid = false ; }


        if (!email.match(emailRegex)){
            const emailerror = document.getElementById('emailerror');
            emailerror.innerText ='enter a proper email address';
            isvalid = false;
        }
        
        if(!password.match(passwordRegex)){
            const passworderror = document.getElementById('passworderror');
            passworderror.innerText = 'Password must be at least 6 characters long, contain at least one uppercase letter, one number, and one special character';
        isvalid = false;
        }

        if(confirmpassword !== password){
            const confirmpassworderror = document.getElementById('confirmpassworderror');
            confirmpassworderror.innerText = 'Passwords does not match';
            isvalid = false;
        }

        if(isvalid){
            form.submit();
            form.reset();
        }
    });

let showstatus = false
const iconstatus = document.getElementById('eye');
iconstatus.addEventListener('click' , ()=>{
    showstatus = !showstatus
    document.getElementById('InputPassword').type = showstatus ? "text" : "password" 
    iconstatus.innerHTML = '' ;
    const iconchange = showstatus ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>' ; 
     iconstatus.innerHTML = iconchange ;
})

