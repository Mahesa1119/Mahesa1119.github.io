function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    
    // Mendapatkan jam, menit, dan detik
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Menambahkan 0 di depan angka jika kurang dari 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Format waktu yang akan ditampilkan
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Memperbarui elemen HTML dengan waktu sekarang
    clockElement.textContent = timeString;
}

// Memperbarui jam setiap detik
setInterval(updateClock, 1000);

// Memanggil fungsi pertama kali agar langsung menampilkan waktu tanpa menunggu interval pertama
updateClock();