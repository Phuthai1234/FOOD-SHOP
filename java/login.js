
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!localStorage.getItem("users")){
        alert("Không tìm thấy người dùng");
    } else {
        let users = JSON.parse(localStorage.getItem("users"));

        let fullName = document.getElementById("fullName").value.trim();
        let password = document.getElementById("password").value.trim();

        let existingUser = users.find(
            (user) =>
                user.fullName === fullName &&
                user.password === password
        );
        if (existingUser){
            localStorage.setItem("currentUser", JSON.stringify(existingUser));
             
            location.href = "./index.html";

        } else {
            alert("Mật khẩu hoặc name không đúng");
        }
    }
});
