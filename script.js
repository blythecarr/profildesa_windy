function showSection(sectionId) {
    // Sembunyikan semua section
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Tampilkan section yang dipilih
    document.getElementById(sectionId).style.display = 'block';
}

// Menampilkan Beranda saat halaman pertama dimuat
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
