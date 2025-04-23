const toastEl = document.getElementById('successToast');
const toast = new bootstrap.Toast(toastEl);
toast.show();

//Thay đổi màu cho hiệu ứng trang hiện tại trên nav
const sidebar = document.getElementById("sidebar");
sidebar.addEventListener("click", function(e){
    const target = e.target.closest('a');
    if (target) {
        target.classList.add('currPage');
    }
})
// js cho sidebar ẩn hiệnhiện
const handleNav = document.getElementById("handleNav");
handleNav.addEventListener("click", function() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = "none"
    const content = document.getElementById("content");
    content.style.left = "0"
})
