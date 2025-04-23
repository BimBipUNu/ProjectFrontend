const toastEl = document.getElementById('successToast');
const toast = new bootstrap.Toast(toastEl);
toast.show();

//Hiệu ứng cho sidebar
const sidebarCol = document.getElementById('sidebarCol');
const mainContent = document.getElementById('mainContent');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
    sidebarCol.classList.toggle('collapsed');
    mainContent.classList.toggle('col-10');
    mainContent.classList.toggle('col-12');
});
