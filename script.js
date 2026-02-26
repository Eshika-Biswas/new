console.log("JS connected");

// If already logged in → go to home page
if (localStorage.getItem("user_data")) {
    window.location.href = "home.html";
}

// Get elements
const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// When form is submitted
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    loginUser(username, password);
});


// Login function
async function loginUser(username, password) {
    try {

        const data = new URLSearchParams();
        data.append("username", username);
        data.append("password", password);

        const response = await fetch(
            "https://ai.mis.digital/truck_monitoring_backend/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: data
            }
        );

        const result = await response.json();
        console.log("API Response:", result);

        if (response.ok) {

            // Save API data
            localStorage.setItem("user_data", JSON.stringify(result));

            alert("Login successful");

            // Redirect to home page
            window.location.href = "home.html";

        } else {
            alert("Invalid username or password");
        }

    } catch (error) {
        console.error("Error:", error);
        alert("Login failed");
    }
}