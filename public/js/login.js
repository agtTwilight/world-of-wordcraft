// If user exists, login, else, ask if they want to create a new account
document.querySelector("#login-form").addEventListener("submit",e=>{
        e.preventDefault();
        const loginObj = {
            username:document.querySelector("#login-username").value,
            password:document.querySelector("#login-password").value
        }
        console.log(loginObj)
        fetch("/api/users/login",{
            method:"POST",
            body:JSON.stringify(loginObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>{
            if(res.ok){
               location.href="/home"
            } else {
                location.href="/signup"
            }
        })
    })