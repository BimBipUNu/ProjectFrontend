if (sessionStorage.getItem("loginSuccess")) {
    const toastEl = document.getElementById('successToast');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();

    sessionStorage.removeItem("loginSuccess");
}
