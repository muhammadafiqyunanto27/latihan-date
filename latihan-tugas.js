// 1. Mendapatkan Tahun Saat Ini
const today = new Date();
const currentYear = today.getFullYear(); // Ini adalah metode yang benar untuk mendapatkan tahun
console.log(currentYear);
// Output: 2024

// 2. Menampilkan Tanggal dan Waktu dalam Format ISO
const now = new Date();
const isoDate = now.toISOString(); // Ini adalah metode yang digunakan untuk mendapatkan format ISO
console.log(isoDate);
// Output: 2024-09-18T03:11:39.606Z

// 3. Mengubah Bulan ke Nama Bulan
const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthName = months[date.getMonth()]; // Ini adalah metode yang benar untuk mendapatkan bulan dari 0-11
console.log(monthName);
//Output: September

// 4. Menghitung Waktu Berbeda dalam Milidetik
const startDate = new Date('2024-01-01');
const endDate = new Date('2024-12-31');
const difference = endDate.getTime() - startDate.getTime(); // Lengkapi untuk menghitung selisih dalam milidetik
console.log(difference);
// Output: 31536000000

// 5. Menampilkan Hari dalam Seminggu
const date2 = new Date('2024-09-18');
const dayOfWeek = date2.getDay(); // Ini adalah metode yang benar untuk mendapatkan hari dalam minggu (0-6)
console.log(dayOfWeek);
// Output: 3

// 6. Mendapatkan Jam, Menit, dan Detik
const currentTime = new Date();
const hours = currentTime.getHours(); // Mendapatkan jam
const minutes = currentTime.getMinutes(); // Mendapatkan menit
const seconds = currentTime.getSeconds(); // Mendapatkan detik
console.log(`Current time: ${hours}:${minutes}:${seconds}`);
// Output: Current time: 10:11:39

// 7. Mengubah Tanggal Menjadi Format DD/MM/YYYY
const day = String(date.getDate()).padStart(2, '0'); // Mendapatkan tanggal
const month = String(date.getMonth() + 1).padStart(2, '0'); // Mendapatkan bulan
const year = date.getFullYear(); // Mendapatkan tahun
console.log(`${day}/${month}/${year}`);
// Output: 18/09/2024

// 8. Menghitung Selisih Hari Antara Dua Tanggal
const start = new Date('2024-01-01');
const end = new Date('2024-12-31');
const differenceInTime = end.getTime() - start.getTime(); // Menghitung selisih dalam milidetik
const differenceInDays = differenceInTime / (1000 * 3600 * 24); // Konversi dari milidetik ke hari
console.log(differenceInDays);
// Output: 365

// 9. Menambahkan 7 Hari ke Tanggal Saat Ini
today.setDate(today.getDate() + 7); // Tambahkan 7 hari
console.log(today);
// Output: 2024-09-25T03:11:39.594Z

// 10. Mengonversi Waktu Lokal ke UTC
const localTime = new Date();
const utcTime = localTime.toUTCString(); // Mendapatkan waktu UTC dalam format string
console.log(utcTime);
// Output: Wed, 18 Sep 2024 03:11:39 GMT