document.addEventListener("DOMContentLoaded", () => {
    // Signup
    document.getElementById("signupForm")?.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const full_name = document.getElementById("full_name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const user_type = document.getElementById("user_type").value;

        console.log(full_name, " ", email, " ", password, " ");

        const response = await fetch("./Backend/auth1/signup.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ full_name, email, password, user_type })
        });

        const result = await response.json();
        alert(result.message);
        if (result.status === "success") window.location.href = "login.html";
    });

    // Login
    document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const response = await fetch("http://localhost:80/waste management system/Backend/auth1/login.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();
        alert(result.message);
        if (result.status === "success") {
            window.location.href = result.user_type === "admin" ? "admin_dashboard.html" : "dashboard.html";
        }
    });
});
