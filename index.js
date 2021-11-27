function submitData(name, email){
    return fetch("http://localhost:3000/users", users(name, email))
        .then(function (response){
            return response.json();
        })
        .then(function(object){
            let h2 = document.createElement('h2')
            h2.innerHTML = object.id
            document.body.appendChild(h2)
        })
        .catch(function(error){
            let h3 = document.createElement('h3')
            h3.innerHTML = error.message
            document.body.appendChild(h3)
            alert("wrong")
        })
}

function users(name, email) {
    return {
        method: "POST",
        headers: {
            "content-type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(formData(name, email))
    }
}

function formData(name, email){
    return {
        name: name, 
        email: email
    }
}
