const userData = localStorage.getItem("user_data");

// Restrict page if not logged in
if (!userData) {
    window.location.href = "login.html";
}

const data = JSON.parse(userData);

// Show factory name
const factoryElement = document.getElementById("factoryName");
factoryElement.innerText = data.factory_name || "Factory not found";

// Logout
function logout() {
    localStorage.removeItem("user_data");
    window.location.href = "login.html";
}