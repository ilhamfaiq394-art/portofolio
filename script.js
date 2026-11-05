// Menunggu sampai seluruh dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // Mengambil elemen tombol menu dan daftar menu
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    // Menambahkan event listener saat tombol menu diklik
    mobileMenuBtn.addEventListener('click', function() {
        // Toggle class 'active' untuk menampilkan/menyembunyikan menu
        navLinks.classList.toggle('active');
    });

    // Menutup menu otomatis jika salah satu link diklik (khusus mobile)
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});