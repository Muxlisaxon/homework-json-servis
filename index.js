let form = document.getElementById("form")

form.addEventListener('submit', function (e) {

    e.preventDefault()

    let name = document.getElementById("name").value
    let body = document.getElementById("body").value

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: name,
            body: body,
        }),
        headers: {
            "Content-Type": "application/json; charset: UTF-8"
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)

            let results = document.getElementById("results")
            
            results.innerHTML = `<p>My name is ${name}</p>
                                 <p>My surname is ${body}</p>
    `
        })

})

