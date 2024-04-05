
const loginForm = document.querySelector('form.login-form'); 
const submitButton = document.getElementById("submit");

document.getElementById('submit').addEventListener('click', 
    function(event) {
        event.preventDefault();
        
        const Username = document.getElementById("Username").value;
        const Password = document.getElementById("Password").value;
        const obj = {
            username : Username,
            password : Password,
        }
        JSON.stringify(obj);

            fetch("/token", {
            method: "POST",
            headers:{
                "Content-Type" : 'application/json',
            },
            body: JSON.stringify(obj),
        }).then(response => response.json()).then( data => {
            console.log(data);
            sessionStorage.setItem("accessToken",data.access_token);
            // console.log(sessionStorage.getItem("accessToken"));
            // window.location.href = "/protected";
            redirectToProtected();
        }).catch((error)=>{
            console.error("Error:", error);
        });

});

function redirectToProtected(){
    fetch("/protected",{
        method : "GET",
        headers : {
            'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`,
        }
    }).then(response => {
        if(response.ok) {
            // console.log(response.text());
            return response.text();
        }
        throw new Error("Network response was not ok.");
    })
    .then(html => {
        document.body.innerHTML = html
    })
    .catch(error => console.error("Error:", error));
}