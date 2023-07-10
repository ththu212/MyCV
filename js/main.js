const navbarToggle = document.querySelector('.navbar-toggler');
const navbarOverlay = document.querySelector('#navbarOverlay');

navbarToggle.addEventListener('click', function () {
    navbarOverlay.classList.toggle('show');
});

function showIphoneProducts() {
    document.getElementById('categoryTitle').textContent = 'Điện thoại iPhone';
    document.getElementById('iphoneProducts').classList.remove('d-none');
    document.getElementById('samsungProducts').classList.add('d-none');
}

function showSamsungProducts() {
    document.getElementById('categoryTitle').textContent = 'Điện thoại Samsung';
    document.getElementById('iphoneProducts').classList.add('d-none');
    document.getElementById('samsungProducts').classList.remove('d-none');
}