let users = JSON.parse(localStorage.getItem("users")) || [];

const submit = document.getElementById("submit");
const swapPageLogin = document.getElementById("swapPageLogin");
//Các thành phần trong trang cần chuyển đổi
let please = document.getElementById("please");
let information = document.getElementById("information");
let changePage = document.getElementById("changePage");
let rememberArea = document.getElementById("remember-area");
let errorNotice = document.getElementById("error-notice")
let successNotice = document.getElementById("success-notice");

//Xem Người dùng có dùng tính năng Remember me không
// Khi tải trang, kiểm tra xem có thông tin currUser trong localStorage không
window.addEventListener("load", function () {
    const currUser = JSON.parse(localStorage.getItem("currUser"));
    if (currUser) {
        document.getElementById("email").value = currUser.email || "";
        document.getElementById("password").value = currUser.password || "";
        document.getElementById("exampleCheck1").checked = true; // Đánh dấu checkbox "Remember me"
    }
});
//Đăng nhập + Đăng ký
submit.addEventListener("click", function (e) {
    e.preventDefault();
    let email = document.getElementById("email").value.trim().toLowerCase();
    let password = document.getElementById("password").value.trim();
    const rememberMe = document.getElementById("exampleCheck1").checked;

    if (please.innerText == "Please sign in") {
        const user = users.find(account => account.email === email && account.password === password);
        if (user) {
            // Nếu chọn "Remember me", lưu thông tin vào localStorage
            if (rememberMe) {
                localStorage.setItem("currUser", JSON.stringify({ email, password }));
            } else {
                localStorage.removeItem("currUser");
            }
            sessionStorage.setItem("loginSuccess", "true")
            location.href = "../pages/home-page.html"

            // Lưu username vào localStorage để hiển thị tên đăng nhập
            localStorage.setItem("loggedInUsername", user.username);

        } else {
            if (email == "") {
                errorNotice.innerText = "Email không được để trống"
            } else if (password == "") {
                errorNotice.innerText = "Password không được để trống"
            } else {
                errorNotice.innerText = "Email hoặc mật khẩu không tồn tại"
            }
        }
        //Show Error Toast
        const toastEl = document.getElementById('errorToast');
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    } else {
        let username = document.getElementById("userName").value.trim();
        let flag = true;
        const emailExists = users.some(account => account.email === email);

        if (email == "") {
            errorNotice.innerText = "Email không được để trống"
        } else if (!email.includes("@") || !email.includes(".")) {
            errorNotice.innerText = "Email không hợp lệ! Phải chứa '@' và '.' ";
        } else if (email.indexOf("@") > email.lastIndexOf(".")) {
            errorNotice.innerText = "Email không hợp lệ! Dấu '.' phải sau dấu '@'";
        } else if (email[email.indexOf("@") + 1] === ".") {
            errorNotice.innerText = "Email không hợp lệ! Sau dấu '@' không được là dấu '.'";
        } else if (emailExists) {
            errorNotice.innerText = "Email đã tồn tại. Vui lòng sử dụng email khác.";
        } else if (username == "") {
            errorNotice.innerText = "Username không được để trống"
        } else if (password == "") {
            errorNotice.innerText = "Password không được để trống"
        } else if (password.length < 8) {
            errorNotice.innerText = "Password phải có tối thiểu 8 kí tự"
        } else {
            flag = false
            let id = users.length + 1
            const user = {
                id,
                email,
                username,
                password,
            }
            users = [...users, user]
            localStorage.setItem("users", JSON.stringify(users));
            successNotice.innerText = "Đăng ký thành công"
            //Show Succsess Toast
            const toastEl = document.getElementById('successToast');
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
            document.getElementById("swapPageLogin").click();
        }
        if (flag) {
            //Show Error Toast
            const toastEl = document.getElementById('errorToast');
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
        }
    }
})
//Đổi trang đăng ký/ Đăng nhập
changePage.addEventListener("click", function (e) { //Gán sự kiến cho phần tử cha target vào phần tử con để không cần gán lại sự kiện chuyển trangtrang
    e.preventDefault();
    if (e.target.id === "swapPageLogin") {
        if (please.innerText == "Please sign in") { //Từ trang đăng nhập đổi sang đăng ký
            please.innerText = "Please sign up";
            information.innerHTML = `<input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email address">
                    <input type="text" class="form-control" id="userName" aria-describedby="usernameHelp" placeholder="Username">
                    <input type="password" class="form-control" id="password" placeholder="Password">`
            rememberArea.style.display = "none";
            changePage.innerHTML = `Already have an account, <a id="swapPageLogin" href="#">click here</a>`
            submit.innerText = "Sign up";
        } else { //Từ đăng ký sang đăng nhập
            please.innerText = "Please sign in";
            information.innerHTML = `<input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email address">
                    <input type="password" class="form-control" id="password" placeholder="Password">`
            rememberArea.style.display = "block";
            changePage.innerHTML = `Don't have an account, <a id="swapPageLogin" href="#">click here</a>`
            submit.innerText = "Sign in"
        }
    }
})
