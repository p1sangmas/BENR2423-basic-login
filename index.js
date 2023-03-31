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

function register (newusername, newpassword, newemail) {
    // todo: check if username exist
    let userCheck = dbUsers.find(element =>
        element.username == newusername
    ) // check username in database
    if (userCheck){
        return "User already registered"
    } else {
        dbUsers.push({
            username: newusername,
            password: newpassword,
            email: newemail
        })
    }
    

}
//try to login
console.log(login("fakhrul", "baga"))
console.log(login("firdaus", "daus"))

//try to register
register("firdaus", "daus", "firdaus@gmail.com")
console.log(register("fakhrul", "wdj", "hello@gmail.com"))
