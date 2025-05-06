const sidebarCol = document.getElementById('sidebarCol');
const mainContent = document.getElementById('mainContent');
const toggleBtn = document.getElementById('toggleBtn');

window.addEventListener('DOMContentLoaded', () => {
    sidebarCol.classList.remove('collapsed');
    mainContent.classList.remove('mleft-0');
    mainContent.classList.add('mleft-custom');
});

let sidebarClosed = false;
let lastScrollX = window.scrollX;  // Lưu vị trí scroll ngang ban đầu

window.addEventListener('scroll', () => {
    const currentScrollX = window.scrollX;

    if (currentScrollX !== lastScrollX) {
        // CHỈ khi scroll ngang mới làm
        if (!sidebarCol.classList.contains('collapsed') && !sidebarClosed) {
            sidebarCol.classList.add('collapsed');
            mainContent.classList.remove('mleft-custom');
            mainContent.classList.add('mleft-0');
            sidebarClosed = true;
        }
    }

    lastScrollX = currentScrollX; // Cập nhật lại vị trí scrollX mới
});

toggleBtn.addEventListener('click', () => {
    sidebarCol.classList.toggle('collapsed');
    mainContent.classList.toggle('mleft-0');
    mainContent.classList.toggle('mleft-custom');

    sidebarClosed = sidebarCol.classList.contains('collapsed');
});

// Hiển thị modal khi nhấn vào nút "Sign out"
document.querySelector(".signout").addEventListener("click", function (e) {
    e.preventDefault(); // Ngăn chặn hành động mặc định của liên kết

    const signOutModal = new bootstrap.Modal(document.getElementById("signOutModal"));
    signOutModal.show();
});
// Xử lý khi người dùng xác nhận đăng xuất
document.getElementById("confirmSignOut").addEventListener("click", function () {
    // Xóa thông tin đăng nhập khỏi localStorage và sessionStorage
    localStorage.removeItem("loggedInUsername");
    sessionStorage.removeItem("loginSuccess");

    // Chuyển hướng về trang đăng nhập
    window.location.href = "../pages/login.html";
});
