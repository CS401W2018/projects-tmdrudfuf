document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    const user = document.getElementById("UserName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("Password").value;
    const age = document.getElementById("age").value;

    if (!user || ! email || !password){
        alert("You must to provide User Information.");
        return;
    } 
    if (!age || age <20 ) {
        alert("You must to be 20years or older to submit this form.");
    }

    const data = {
        userName : user,
        emailAddress : email,
        password : password,
        aga : age
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "FormProcessing.json",true);
    xhr.setRequestHeader("Content-Type", "application/json;charset-UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status ===200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = "";
        } else if (xhr.readyState ===4) {
            alert('Error submitting form')
        }
    };
    xhr.send(JSON.stringify(data));
    console.log(data);
});