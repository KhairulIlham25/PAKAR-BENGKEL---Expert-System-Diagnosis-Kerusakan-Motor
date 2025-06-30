function inferensi() {
    let hasilContainer = document.getElementById("hasil-container");
    let hasil = document.getElementById("hasil");
    let diagnosa = [];
    let subtotal = 0;

    // Scroll ke bagian card untuk menampilkan hasil
    const card = document.querySelector('.card');
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Data estimasi biaya berdasarkan gejala
    const cost = {
        "gejala1": "Rp.100.000 - Rp.200.000 (Roller CVT), Rp.250.000 - Rp.450.000 (Belt CVT), Rp.150.000 - Rp.350.000 (Kampas Kopling)",
        "gejala2": "Rp.400.000 - Rp.800.000 (Radiator atau Sistem Pendingin), Rp.50.000 - Rp.100.000 (Cairan Pendingin)",
        "gejala3": "Rp.300.000 - Rp.600.000 (Pulley CVT), Rp.200.000 - Rp.350.000 (Belt CVT)",
        "gejala4": "Rp.50.000 - Rp.100.000 (Busi), Rp.350.000 - Rp.500.000 (Injektor Injeksi), Rp.500.000 - Rp.750.000 (Karburator)",
        "gejala5": "Rp.350.000 - Rp.800.000 per roda (Ban), Rp.250.000 - Rp.500.000 per sisi (Suspensi)",
        "gejala6": "Rp.400.000 - Rp.600.000 (Ring Piston), Rp.700.000 - Rp.1.000.000 (Dinding Silinder), Rp.350.000 - Rp.500.000 (Seal Klep)",
        "gejala7": "Rp.400.000 - Rp.600.000 (Sistem Injeksi), Rp.100.000 - Rp.200.000 (Filter Udara)",
        "gejala8": "Rp.150.000 - Rp.250.000 (Bohlam LED), Rp.250.000 - Rp.450.000 (Perbaikan Kelistrikan)",
        "gejala9": "Rp.300.000 - Rp.500.000 (Kampas Rem), Rp.100.000 - Rp.200.000 (Minyak Rem)",
        "gejala10": "Rp.300.000 - Rp.500.000 (Kampas Kopling CVT), Rp.500.000 - Rp.700.000 (Belt CVT)",
        "gejala11": "Rp.500.000 - Rp.700.000 (Kampas Ganda), Rp.600.000 - Rp.800.000 (Pulley CVT)",
        "gejala12": "Rp.100.000 - Rp.150.000 (Seal Oli), Rp.150.000 - Rp.250.000 (Gasket Oli)",
        "gejala13": "Rp.150.000 - Rp.300.000 (Throttle body), Rp.100.000 - Rp.200.000 (Filter Udara)",
        "gejala14": "Rp.150.000 - Rp.300.000 (Kampas Kopling CVT), Rp.100.000 - Rp.200.000 (Roller CVT)",
        "gejala15": "Rp.50.000 - Rp.100.000 (Busi), Rp.200.000 - Rp.400.000 (Sistem Kelistrikan)",
        "gejala16": "Rp.200.000 - Rp.350.000 (Sensor Throttle), Rp.100.000 - Rp.200.000 (Filter Udara)"
    };


    const harga = {
        "gejala1": [
            { name: "Roller CVT", price: "Rp.100.000" },      
            { name: "Belt CVT", price: "Rp.225.000" },        
            { name: "Kampas Kopling", price: "Rp.175.000" }    
        ],
        "gejala2": [
            { name: "Radiator atau Sistem Pendingin", price: "Rp.500.000" },
            { name: "Cairan Pendingin", price: "Rp.50.000" }   
        ],
        "gejala3": [
            { name: "Pulley CVT", price: "Rp.350.000" },     
            { name: "Belt CVT", price: "Rp.225.000" }         
        ],
        "gejala4": [
            { name: "Busi", price: "Rp.55.000" },              
            { name: "Injektor Injeksi", price: "Rp.300.000" }, 
            { name: "Karburator", price: "Rp.600.000" }      
        ],
        "gejala5": [
            { name: "Ban", price: "Rp.600.000" },              
            { name: "Suspensi", price: "Rp.450.000" }        
        ],
        "gejala6": [
            { name: "Ring Piston", price: "Rp.550.000" },      
            { name: "Dinding Silinder", price: "Rp.800.000" }, 
            { name: "Seal Klep", price: "Rp.450.000" }        
        ],
        "gejala7": [
            { name: "Sistem Injeksi", price: "Rp.600.000" },   
            { name: "Filter Udara", price: "Rp.150.000" }     
        ],
        "gejala8": [
            { name: "Bohlam LED", price: "Rp.250.000" },       
            { name: "Perbaikan Kelistrikan", price: "Rp.350.000" } 
        ],
        "gejala9": [
            { name: "Kampas Rem", price: "Rp.400.000" },       
            { name: "Minyak Rem", price: "Rp.150.000" }       
        ],
        "gejala10": [
            { name: "Kampas Kopling CVT", price: "Rp.500.000" }, 
            { name: "Belt CVT", price: "Rp.600.000" }          
        ],
        "gejala11": [
            { name: "Kampas Ganda", price: "Rp.600.000" },     
            { name: "Pulley CVT", price: "Rp.700.000" }        
        ],
        "gejala12": [
            { name: "Seal Oli", price: "Rp.100.000" },         
            { name: "Gasket Oli", price: "Rp.175.000" }        
        ],
        "gejala13": [
            { name: "Throttle body", price: "Rp.200.000" },    
            { name: "Filter Udara", price: "Rp.150.000" }      
        ],
        "gejala14": [
            { name: "Kampas Kopling CVT", price: "Rp.225.000" }, 
            { name: "Roller CVT", price: "Rp.200.000" }         
        ],
        "gejala15": [
            { name: "Busi", price: "Rp.500.000" },             
            { name: "Sistem Kelistrikan", price: "Rp.250.000" } 
        ],
        "gejala16": [
            { name: "Sensor Throttle", price: "Rp.300.000" },   
            { name: "Filter Udara", price: "Rp.150.000" }      
        ]
    };
    // Mengecek apakah gejala dipilih dan menambahkan diagnosa, harga, dan penyebab kerusakan
    if (document.getElementById("gejala1").checked) {
        diagnosa.push("Roller CVT aus, CVT yang sudah kendur, atau kampas ganda yang sudah menipis.<br>Estimasi Biaya : " + cost["gejala1"]);
        diagnosa.push("Penyebab: Terjadi akibat penggunaan motor yang sering menanjak atau berhenti-mulai secara cepat.");
       harga["gejala1"].forEach(item => {
        subtotal += parseInt(item.price.replace(/[^\d]/g, '')); 
});

    }

    if (document.getElementById("gejala2").checked) {
        diagnosa.push("Masalah pada sistem pendingin atau radiator yang tidak berfungsi dengan baik.<br>Estimasi Biaya : " + cost["gejala2"]);
        diagnosa.push("Penyebab: Terjadi karena kurangnya perawatan pada sistem pendingin atau radiator yang kotor.");
       harga["gejala2"].forEach(item => {
        subtotal += parseInt(item.price.replace(/[^\d]/g, '')); 
});

    }

    if (document.getElementById("gejala3").checked) {
        diagnosa.push("Kotoran atau Kerusakan Pada Komponen CVT seperti pulley atau belt.<br>Estimasi Biaya : " + cost["gejala3"]);
        diagnosa.push("Penyebab: Kotoran atau debu yang masuk ke dalam komponen CVT atau usia komponen yang sudah lama.");
       harga["gejala3"].forEach(item => {
        subtotal += parseInt(item.price.replace(/[^\d]/g, '')); 
});

    }

    if (document.getElementById("gejala4").checked) {
        diagnosa.push("Masalah pada sistem pembakaran, busi kotor, atau bahan bakar yang tidak sesuai.<br>Estimasi Biaya : " + cost["gejala4"]);
        diagnosa.push("Penyebab: Penggunaan bahan bakar berkualitas rendah atau busi yang sudah kotor atau aus.");
       harga["gejala4"].forEach(item => {
        subtotal += parseInt(item.price.replace(/[^\d]/g, '')); 
});

    }

    if (document.getElementById("gejala5").checked) {
        diagnosa.push("Ban yang tidak seimbang atau masalah pada suspensi.<br>Estimasi Biaya : " + cost["gejala5"]);
        diagnosa.push("Penyebab: Penggunaan ban yang tidak sesuai atau tekanan angin yang kurang, serta kerusakan pada suspensi.");
       harga["gejala5"].forEach(item => {
        subtotal += parseInt(item.price.replace(/[^\d]/g, '')); 
});

    }

    if (document.getElementById("gejala6").checked) {
        diagnosa.push("Ring Piston aus atau Rusak, Dinding Silinder Lecet atau Aus.<br>Estimasi Biaya : " + cost["gejala6"]);
        diagnosa.push("Penyebab: Akibat penggunaan mesin yang terlalu panas atau oli mesin yang kurang.");
       harga["gejala6"].forEach(item => {
        subtotal += parseInt(item.price.replace(/[^\d]/g, '')); 
});

    }

    if (document.getElementById("gejala7").checked) {
        diagnosa.push("Sistem injeksi atau karburator yang kotor, atau pada filter udara.<br>Estimasi Biaya : " + cost["gejala7"]);
        diagnosa.push("Penyebab: Pemakaian bahan bakar yang tidak bersih atau kualitas rendah.");
       harga["gejala7"].forEach(item => {
        subtotal += parseInt(item.price.replace(/[^\d]/g, '')); 
});

    }

    if (document.getElementById("gejala8").checked) {
        diagnosa.push("Masalah pada kabel listrik, terminal, atau sistem kelistrikan lainnya.<br>Estimasi Biaya : " + cost["gejala8"]);
        diagnosa.push("Penyebab: Kabel atau terminal yang aus atau korosi akibat penggunaan dalam kondisi cuaca ekstrem.");
       harga["gejala8"].forEach(item => {
        subtotal += parseInt(item.price.replace(/[^\d]/g, '')); 
});

    }

    if (document.getElementById("gejala9").checked) {
        diagnosa.push("Kampas Rem yang sudah aus atau minyak rem yang perlu diganti.<br>Estimasi Biaya : " + cost["gejala9"]);
        diagnosa.push("Penyebab: Penggunaan rem yang terlalu sering atau kondisi jalan yang berat.");
       harga["gejala9"].forEach(item => {
        subtotal += parseInt(item.price.replace(/[^\d]/g, '')); 
});

    }

    if (document.getElementById("gejala10").checked) {
        diagnosa.push("Kampas Kopling CVT yang aus atau belt CVT yang sudah perlu diganti.<br>Estimasi Biaya : " + cost["gejala10"]);
        diagnosa.push("Penyebab: Penggunaan motor dalam kondisi akselerasi yang tinggi atau pemakaian CVT tanpa perawatan.");
        harga["gejala10"].forEach(item => {
        subtotal += parseInt(item.price.replace(/[^\d]/g, '')); 
});

    }

    if (document.getElementById("gejala11").checked) {
        diagnosa.push("Kampas Ganda yang aus atau pulley CVT yang perlu diganti.<br>Estimasi Biaya : " + cost["gejala11"]);
        diagnosa.push("Penyebab: Terlalu sering melakukan akselerasi cepat atau penggunaan komponen yang sudah tua.");
        harga["gejala11"].forEach(item => {
        subtotal += parseInt(item.price.replace(/[^\d]/g, '')); 
});

    }

    if (document.getElementById("gejala12").checked) {
        diagnosa.push("Kebocoran Oli Mesin.<br>Estimasi Biaya : " + cost["gejala12"]);
        diagnosa.push("Penyebab: Seal oli yang sudah aus atau pemasangan komponen yang tidak rapat.");
        harga["gejala12"].forEach(item => {
        subtotal += parseInt(item.price.replace(/[^\d]/g, '')); 
});

    }

    if (document.getElementById("gejala13").checked) {
        diagnosa.push("Performa Menurun Saat Akselerasi.<br>Estimasi Biaya : " + cost["gejala13"]);
        diagnosa.push("Penyebab: Terjadi karena kerusakan pada komponen CVT atau pengaturan bahan bakar yang tidak tepat.");
        harga["gejala13"].forEach(item => {
        subtotal += parseInt(item.price.replace(/[^\d]/g, '')); 
});

    }

    if (document.getElementById("gejala14").checked) {
        diagnosa.push("Matic Terasa Tersendat atau Lemah.<br>Estimasi Biaya : " + cost["gejala14"]);
        diagnosa.push("Penyebab: Kerusakan pada sistem CVT, roller, atau belt yang aus.");
        harga["gejala14"].forEach(item => {
        subtotal += parseInt(item.price.replace(/[^\d]/g, '')); 
});

    }

    if (document.getElementById("gejala15").checked) {
        diagnosa.push("Setelah Menyalakan Mesin, Ada Bau Terbakar.<br>Estimasi Biaya : " + cost["gejala15"]);
        diagnosa.push("Penyebab: Pembakaran oli atau komponen yang sudah rusak seperti kabel atau komponen kelistrikan.");
        harga["gejala15"].forEach(item => {
        subtotal += parseInt(item.price.replace(/[^\d]/g, '')); 
});
    }

    if (document.getElementById("gejala16").checked) {
        diagnosa.push("RPM Mesin Tidak Stabil.<br>Estimasi Biaya : " + cost["gejala16"]);
        diagnosa.push("Penyebab: Sensor throttle yang rusak atau masalah pada sistem pengapian.");
        harga["gejala16"].forEach(item => {
        subtotal += parseInt(item.price.replace(/[^\d]/g, '')); 
});
    }
    // Menampilkan hasil diagnosa dan estimasi biaya
    if (diagnosa.length > 0) {
        // Tampilkan container hasil
        hasilContainer.style.display = "block";
        // Gabungkan diagnosa dan estimasi biaya menjadi satu string HTML
        let diagnosaHtml = diagnosa.join("<br><br>");
        diagnosaHtml += "<br><br><strong>Total Estimasi Biaya: Rp " + subtotal.toLocaleString() + "</strong>";
        // Menampilkan hasil ke dalam elemen hasil
        hasil.innerHTML = diagnosaHtml;
    } else {
        // Jika tidak ada diagnosa, sembunyikan container hasil
        hasilContainer.style.display = "none";
    }
}