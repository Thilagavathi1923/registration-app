<<<<<<< HEAD
async function register() {
    const data = {
        fullname: document.getElementById("fullname").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        marital_status: document.getElementById("marital_status").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        qualification: document.getElementById("qualification").value,
        occupation: document.getElementById("occupation").value,
        age: document.getElementById("age").value,
        password: document.getElementById("password").value
    };

 await fetch("https://registration-backend-production-39c7.up.railway.app/register", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
});

alert("Registered Successfully");
=======
async function register() {
    const data = {
        fullname: document.getElementById("fullname").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        marital_status: document.getElementById("marital_status").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        qualification: document.getElementById("qualification").value,
        occupation: document.getElementById("occupation").value,
        age: document.getElementById("age").value,
        password: document.getElementById("password").value
    };

    await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    alert("Registered Successfully");
>>>>>>> 460071e9061a1ce3d470f3cdea1d96069f842e16
}