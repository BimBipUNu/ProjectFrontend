let account = {
    email: "trantai180506@gmail.com",
    password: "Trantai180506@#",
}

const submit = document.getElementById("submit");
const swapPageLogin = document.getElementById("swapPageLogin");
//Các thành phần trong trang cần chuyển đổi
let please = document.getElementById("please");
let information = document.getElementById("information");
let changePage = document.getElementById("changePage");
let rememberArea = document.getElementById("remember-area");

//Đăng nhập
submit.addEventListener("click", function(e){
    e.preventDefault();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (email === account.email && password === account.password) {
        sessionStorage.setItem("loginSuccess","true")
        location.href="../pages/home-page.html"
    } else {
    //Show Error Toast
        const toastEl = document.getElementById('errorToast');
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    }
})
//Đổi trang đăng ký/ Đăng nhập
changePage.addEventListener("click",function(e){ //Gán sự kiến cho phần tử cha target vào phần tử con để không cần gán lại sự kiện chuyển trangtrang
    e.preventDefault();
    if(e.target.id === "swapPageLogin") {
        if(please.innerText == "Please sign in"){ //Từ trang đăng nhập đổi sang đăng ký
            please.innerText = "Please sign up";
            information.innerHTML = `<input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email address">
                    <input type="text" class="form-control" id="username" aria-describedby="usernameHelp" placeholder="Username">
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
