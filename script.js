function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goLink() {
  window.open("https://daftar-member-xid.vercel.app/", "_blank");
}

function goIg() {
  window.open("https://www.instagram.com/damzzz_54/?hl=id", "_blank");
}