const getUser = document.getElementById("getUser");

getUser.addEventListener("click", (event) => {
    event.preventDefault();

    fetch("/testAuth", {
        method: "POST",
        headers: {
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.username)
    })
})