# Simple Login Page

This project is a basic login page created using HTML, CSS, and JavaScript. The page features a responsive layout, client-side form validation, and basic authentication logic for demonstration purposes.

## Features

- **Login Form**: A form with input fields for username and password.
- **Client-Side Validation**: JavaScript-based validation that checks if the username and password fields are filled before submission.
- **Basic Authentication**: A hardcoded username (`mano`) and password (`123456`). If the credentials match, a success alert is shown, otherwise, an error alert appears.
- **CSS Styling**: Includes custom styles for the form, buttons, and background.
- **Background Image**: The page supports a background image (`bg.jpeg`). You can replace it with your own image.

## How to Use

1. **Clone the repository** or download the project files.
2. Ensure the `bg.jpeg` image is in the same folder as the HTML file.
3. Open the `index.html` file in your browser.
4. Enter the username `mano` and password `123456` to log in. If the credentials are incorrect, an error message will appear.

## File Structure


## Code Overview

### 1. `index.html`

The HTML file contains the structure of the login page. It includes:

- An HTML form with `username` and `password` input fields.
- Inline CSS for styling the layout, form, and buttons.
- Inline JavaScript to handle form validation and simple login logic.

### 2. `bg.jpeg`

This is the background image used for the page. You can replace it with any image of your choice by editing the `background-image` URL in the CSS section of the HTML file.

### 3. JavaScript Functionality

The JavaScript validates that both the username and password fields are not empty. If the fields are filled correctly, it checks the hardcoded credentials and displays an alert based on whether they are correct or not.

```javascript
function validateLogin() {
    let valid = true;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    if (username === "") {
        document.getElementById("usernameError").textContent = "Username is required";
        valid = false;
    }

    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required";
        valid = false;
    }

    if (valid) {
        if (username === "mano" && password === "123456") {
            alert("Login successfully");
        } else {
            alert("Username or password incorrect");
        }
    }

    return false; // Prevent form submission
}

### How to Use:
1. Copy the content into a file named `README.md`.
2. Place the `README.md` file in the root folder of your project (alongside your `index.html` and `bg.jpeg` files).
3. Push the repository to GitHub, and the `README.md` will automatically display on the project's main page.

Let me know if you need any more adjustments!
