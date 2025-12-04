// Fungsi inti logika
const logika = {
    konjungsi: (p, q) => p && q,
    disjungsi: (p, q) => p || q,
    implikasi: (p, q) => (!p) || q, // P -> Q setara dengan NOT P OR Q
    negasi: (p) => !p
};

function cekKeselamatan() {
    // Ambil nilai Boolean dari checkbox
    const p = document.getElementById('p_val').checked;
    const q = document.getElementById('q_val').checked;
    
    // Ambil pilihan logika dari dropdown
    const pilihan = document.getElementById('logika_pilihan').value;
    const outputDiv = document.getElementById('output');
    
    let hasil_logika = false;
    let interpretasi = "";
    
    // Proses Logika berdasarkan pilihan user
    switch(pilihan) {
        case 'p_and_q':
            hasil_logika = logika.konjungsi(p, q);
            interpretasi = `P ∧ Q: Lampu (${p ? 'T' : 'F'}) DAN Pintu (${q ? 'T' : 'F'}) menghasilkan ${hasil_logika ? 'T' : 'F'}.`;
            break;
        case 'p_or_q':
            hasil_logika = logika.disjungsi(p, q);
            interpretasi = `P ∨ Q: Lampu (${p ? 'T' : 'F'}) ATAU Pintu (${q ? 'T' : 'F'}) menghasilkan ${hasil_logika ? 'T' : 'F'}.`;
            break;
        case 'p_implies_q':
            hasil_logika = logika.implikasi(p, q);
            interpretasi = `P → Q: JIKA Lampu (${p ? 'T' : 'F'}), MAKA Pintu (${q ? 'T' : 'F'}) menghasilkan ${hasil_logika ? 'T' : 'F'}.`;
            break;
        case 'not_p':
            hasil_logika = logika.negasi(p);
            interpretasi = `¬P: Lampu TIDAK (${p ? 'T' : 'F'}) menyala menghasilkan ${hasil_logika ? 'T' : 'F'}.`;
            break;
    }
    
    // Tentukan hasil keselamatan (misalnya, True berarti 'Selamat')
    let hasil_akhir = "";
    let kelas_css = "";

    if (hasil_logika) {
        hasil_akhir = "SELAMAT! Aksi yang kamu pilih sukses.";
        kelas_css = "safe";
    } else {
        hasil_akhir = "Gagal! Hantu menangkapmu.";
        kelas_css = "danger";
    }

    outputDiv.className = kelas_css;
    outputDiv.innerHTML = `${interpretasi}<br>Keputusan: ${hasil_akhir}`;
}
