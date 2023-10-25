// Inisiasi
const nama = document.getElementById("nama");
const tanggal = document.getElementById("tanggal");
const laki = document.getElementById("laki-laki");
const perempuan = document.getElementById("perempuan");
const pesan = document.getElementById("pesan");
const namaKosong = document.getElementById("nama-kosong");
const tanggalKosong = document.getElementById("tanggal-kosong");
const jkKosong = document.getElementById("jk-kosong");
const pesanKosong = document.getElementById("pesan-kosong");
const btnSubmit = document.getElementById("submit");
const showTime = document.getElementById("show-time");
const showName = document.getElementById("show-nama");
const showTanggal = document.getElementById("show-tanggal");
const showJk = document.getElementById("show-jk");
const showPesan = document.getElementById("show-pesan");

// Submit form
btnSubmit.addEventListener("click", function () {
  //jika input kosong
  nama.value === ""
    ? ((namaKosong.textContent = "Nama tidak boleh kosong"),
      (namaKosong.style.color = "red"))
    : (namaKosong.textContent = "");

  tanggal.value === ""
    ? ((tanggalKosong.textContent = "Tanggal tidak boleh kosong"),
      (tanggalKosong.style.color = "red"))
    : (tanggalKosong.textContent = "");

  laki.checked === false && perempuan.checked === false
    ? ((jkKosong.textContent = "Jenis Kelamin tidak boleh kosong"),
      (jkKosong.style.color = "red"))
    : (jkKosong.textContent = "");

  pesan.value === ""
    ? ((pesanKosong.textContent = "Pesan tidak boleh kosong"),
      (pesanKosong.style.color = "red"))
    : (pesanKosong.textContent = "");

  if (nama.value !== "" && tanggal.value !== "" && pesan.value !== "") {
    if (laki.checked === true || perempuan.checked === true) {
      showTime.textContent = Date();
      showName.textContent = nama.value;
      showTanggal.textContent = tanggal.value;
      showJk.textContent = laki.checked === true ? laki.value : perempuan.value;
      showPesan.textContent = pesan.value;
    }
  }
});
