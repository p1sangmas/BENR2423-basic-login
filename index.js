let dbUsers = [
    {
        username: "fakhrul",
        password: "baga",
        email: "fakhrul@gmail.com"
    },
        {
        username: "fahmi",
        password: "pami",
        email: "fahmi@gmail.com"
    },
        {
        username: "saiful",
        password: "sepul",
        email: "saiful@gmail.com"
    }
]

function login(username, password) {
    console.log("Someone try to login with username:", username, "and password:", password)
    let matched = dbUsers.find(element =>
        element.username == username
    ) // finding element in the array
    if (matched) {
        if (matched.password == password) {
            return matched
        } else {
            return "Passwords do not match"}
    } else {
        return "Username not found"
    }
}

//try to login
console.log(login("fakhrul", "baga"))