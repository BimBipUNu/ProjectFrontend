const sidebarCol = document.getElementById('sidebarCol');
const mainContent = document.getElementById('mainContent');
const toggleBtn = document.getElementById('toggleBtn');

window.addEventListener('DOMContentLoaded', () => {
    sidebarCol.classList.remove('collapsed');
    mainContent.classList.remove('mleft-0');
    mainContent.classList.add('mleft-custom');
});

let sidebarClosed = false;
window.addEventListener('scroll', () => {
    if (!sidebarCol.classList.contains('collapsed') && !sidebarClosed) {
        sidebarCol.classList.add('collapsed');
        mainContent.classList.remove('mleft-custom');
        mainContent.classList.add('mleft-0');
        sidebarClosed = true;
    }
});

toggleBtn.addEventListener('click', () => {
    sidebarCol.classList.toggle('collapsed');
    mainContent.classList.toggle('mleft-0');
    mainContent.classList.toggle('mleft-custom');
    
    sidebarClosed = sidebarCol.classList.contains('collapsed');
});
