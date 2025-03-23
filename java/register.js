
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let lowerCaseLetter = /[a-z]/g;
    let upperCaseLetter = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if (fullName.length < 6) {
        alert("Tên đăng nhập phải có ít nhất 6 ký tự");
    } else if (password.length < 5) {
        alert("Mật khẩu phải có ít nhất 5 ký tự");
    } else if (!password.match(lowerCaseLetter)) {
        alert("Mật khẩu phải chứa ít nhất một ký tự viết thường");
    } else if (!password.match(upperCaseLetter))  {
        alert("Mật khẩu phải chứa ít nhất một ký tự viết hoa");
    } else if (!password.match(numbers))  {
        alert("Mật khẩu phải chứa ít nhất một số hoặc ký tự đặc biệt");
    } else {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({email, password, fullName});
        localStorage.setItem("users", JSON.stringify(users));
        alert("Đăng ký thành công! Chuyển đến trang đăng nhập.");
        location.href = "./login.html";
    }
});
