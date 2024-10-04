function validateLogin() {
    let valid = true;

    // Username and password fields
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Clear any previous error messages
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    // Validate username
    if (username === "") {
        document.getElementById("usernameError").textContent = "Username is required";
        valid = false;
    }

    // Validate password
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required";
        valid = false;
    }

    // Authenticate if the inputs are valid
    if (valid) {
        if (username === "mano" && password === "123456") {
            alert("Login successfully");
        } else {
            alert("Username or password incorrect");
        }
    }

    return false; // Prevent form submission for demonstration purposes
}
