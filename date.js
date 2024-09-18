const date =  new Date();
console.log("Date: ",date)
// Output: UTC DATE
 
const localedate = date.toLocaleDateString()
console.log(localedate)
// Output: Local Date

//Todo: Menampilkan format indonesia
const dateLocalid = date.toLocaleDateString('id-ID')
console.log(dateLocalid)
