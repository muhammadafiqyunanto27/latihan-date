// 1

// Mulai hitung waktu
const startTime = new Date().getTime();

// Loop untuk menampilkan "Hello Santri" 10.000 kali
for (let i = 0; i < 10000; i++) {
    console.log("Hello Santri");
}

// Hitung waktu akhir
const endTime = new Date().getTime();

// Hitung selisih waktu (dalam milidetik)
const elapsedTime = endTime - startTime;
// Hasil
console.log(`Waktu eksekusi: ${elapsedTime} milidetik`);


// 2
function convertTimeToWIT(dateString) {
    // Contoh format dateString: "2024-09-19 03:00:00"
    const utcDate = new Date(dateString);
    utcDate.setHours(utcDate.getHours() + 2); // Tambah 3 jam untuk konversi ke WIT
    return utcDate.toLocaleString('id-ID', { timeZone: 'Asia/Jayapura' }); // Format sesuai Indonesia
  }
  
  const utcTime = "2024-09-19 03:00:00";
  const witTime = convertTimeToWIT(utcTime);
  console.log(witTime); // Output: Rabu, 19 September 2024 07:00:00


// 3
  function getExpiredDate(timeUnit, quantity) {
    // Membuat objek Date baru untuk tanggal sekarang
    const now = new Date();
    
  
    // Menambahkan waktu berdasarkan unit waktu yang diberikan
    if (timeUnit === 'hours') {
      now.setHours(now.getHours() + 7 + quantity);
    } else if (timeUnit === 'months') {
      now.setMonth(now.getMonth() + quantity);
    } else if (timeUnit === 'years') {
      now.setFullYear(now.getFullYear() + quantity);
    } else {
      console.error('Unit waktu tidak valid. Gunakan "hours", "months", atau "years".');
      return null;
    }
  
    // Mengembalikan tanggal expired dalam format ISO 8601
    return now.toISOString();
  }
  
  // Contoh penggunaan:
  const expired24Hours = getExpiredDate('hours', 24);
  const expired1Month = getExpiredDate('months', 1);
  const expired3Months = getExpiredDate('months', 3);
  const expired1Year = getExpiredDate('years', 1);
  
  console.log("Expired dalam 24 jam:", expired24Hours);
  console.log("Expired dalam 1 bulan:", expired1Month);
  console.log("Expired dalam 3 bulan:", expired3Months);
  console.log("Expired dalam 1 tahun:", expired1Year);