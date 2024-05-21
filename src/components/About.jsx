import React from "react";
import {
    Typography 
  } from "@material-tailwind/react"
export default function About() {

return (
<>
    <div className="px-4 py-16 mx-auto bg-red-400 text-white rounded">
        <h2 className="mb-8 text-4xl font-bold leading-none text-center">Tentang Kami</h2>
        <Typography className="p-3">Apakah Anda seorang petani tomat yang berdedikasi? Atau mungkin seorang pecinta kebun
            yang ingin memastikan tanaman tomat Anda tumbuh sehat dan subur? Di IMATO solusinya, kami memiliki semua
            yang Anda butuhkan untuk memastikan tanaman tomat Anda mencapai potensi terbaiknya!</Typography>
        <Typography className="px-4 text-sm font-semibold">- Informasi Lengkap Tentang Penyakit Tanaman Tomat:</Typography>
        <Typography className="px-16">
            <ul class="list-disc">
                <li>Identifikasi Cepat: Pelajari cara mengenali gejala awal penyakit pada tanaman tomat Anda.</li>
            </ul>
            <ul class="list-disc">
                <li>Solusi Tepat: Temukan langkah-langkah efektif untuk mengatasi berbagai penyakit dan masalah hama.</li>
            </ul>
            <ul class="list-disc">
                <li>Pencegahan Terbaik: Dapatkan tips pencegahan agar tanaman Anda selalu sehat.</li>
            </ul>
        </Typography>
    </div>
    <br />
</>
)
}
