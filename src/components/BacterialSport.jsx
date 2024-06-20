import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons'
import Swal from "sweetalert2";
import Images1 from '../assets/sport/sport1.jpeg';
import Images2 from '../assets/sport/sport2.jpeg';
import Images3 from '../assets/sport/sport3.jpeg';
import Images4 from '../assets/sport/sport4.jpeg';
import Images5 from '../assets/sport/sport5.jpeg';
import {
    Card,
    CardBody,
    Typography,
    CardFooter,
    Button,
    Dialog,
    Textarea,
    DialogFooter,
} from "@material-tailwind/react";
export default function BacterialSport() {
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(!open);

const [rating, setRating] = useState(0);

const handleRating = (rate) => {
    setRating(rate);
};

const handleSubmit = () => {
    setOpen(false);
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Berhasil Dikirim",
        showConfirmButton: false,
        timer: 1500
        });
    }

return (
<>

    <div className="relative w-full flex gap-4 py-6 overflow-x-auto p-2 custom-scrollbar">
        <img className="h-48 aspect-video rounded-lg object-cover object-center bg-gray-500" src={Images1} alt="Image 1" />
        <img className="h-48 aspect-video rounded-lg object-cover object-center bg-gray-500" src={Images2} alt="Image 2" />
        <img className="h-48 aspect-video rounded-lg object-cover object-center bg-gray-500" src={Images3} alt="Image 3" />
        <img className="h-48 aspect-video rounded-lg object-cover object-center bg-gray-500" src={Images4} alt="Image 4" />
        <img className="h-48 aspect-video rounded-lg object-cover object-center bg-gray-500" src={Images5} alt="Image 5" />
    </div>
    <Card className="mt-6 m-4">
        <CardBody>
            <Typography variant="h4" color="blue-gray" className="mb-2">
                <FontAwesomeIcon icon={faWandMagicSparkles} /> Tanaman kurang sehat
            </Typography>
            <small className="italic">Jenis Penyakit : Bacterial spot tomato</small>
            <Typography variant="h5" color="blue-gray" className="mb-2 mt-4">
                Karakteristik
            </Typography>
            <Typography className="py-2 px-5">
                <ol className="list-decimal">
                    <li>
                        <strong>Penyebab:</strong> Penyakit ini disebabkan oleh bakteri dari genus <i>Xanthomonas</i>,
                        terutama <i>Xanthomonas campestris</i> pv. <i>vesicatoria</i>.
                    </li>
                    <li>
                        <strong>Gejala Pada Daun:</strong>
                        <ul className="list-disc list-inside ml-4">
                            <li>Bercak kecil berwarna cokelat tua atau hitam dengan tepi kuning.</li>
                            <li>Bercak menyatu dan menyebabkan daun mengering dan rontok.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Gejala Pada Buah:</strong>
                        <ul className="list-disc list-inside ml-4">
                            <li>Bercak hitam kecil, agak cekung, dan kasar pada permukaan buah.</li>
                            <li>Buah menjadi cacat dan tidak layak jual.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Gejala Pada Batang dan Tangkai:</strong>
                        <ul className="list-disc list-inside ml-4">
                            <li>Terdapat bercak-bercak hitam, meskipun kurang umum dibandingkan pada daun dan buah.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Kondisi Penyebaran:</strong>
                        <ul className="list-disc list-inside ml-4">
                            <li>Penyakit menyebar melalui air hujan, irigasi, angin, peralatan berkebun yang
                                terkontaminasi, dan benih yang terinfeksi.</li>
                            <li>Kelembapan tinggi dan suhu hangat mendukung perkembangan penyakit ini.</li>
                        </ul>
                    </li>
                </ol>
            </Typography>
        </CardBody>
        <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
                Penanganan
            </Typography>
            <Typography className="py-2 px-5">
                <ol className="list-decimal">
                    <li>
                        <ol className="list-decimal mt-2">
                            <li>
                                <strong>Penggunaan Benih Bebas Patogen:</strong> Gunakan benih yang bebas patogen atau
                                yang telah diolah dengan air panas untuk membunuh cendawan yang mungkin ada.
                            </li>
                            <li>
                                <strong>Sanitasi dan Rotasi Tanaman:</strong> Singkirkan dan hancurkan sisa-sisa tanaman
                                yang terinfeksi setelah panen. Lakukan rotasi tanaman dengan tanaman yang tidak rentan
                                terhadap antraknosa selama 2-3 tahun.
                            </li>
                            <li>
                                <strong>Penggunaan Varietas Tahan:</strong> Pilih dan tanam varietas tomat yang tahan
                                terhadap antraknosa jika tersedia.
                            </li>
                            <li>
                                <strong>Praktik Budidaya yang Baik:</strong> Hindari irigasi overhead dan pastikan jarak
                                tanam yang cukup untuk sirkulasi udara yang baik.
                            </li>
                            <li>
                                <strong>Penggunaan Fungisida:</strong> Aplikasi fungisida seperti mancozeb,
                                chlorothalonil, atau azoxystrobin sesuai dengan petunjuk pada label produk.
                            </li>
                            <li>
                                <strong>Pemantauan dan Pengendalian Serangga:</strong> Kendalikan serangga seperti kutu
                                daun dan thrips yang bisa menjadi vektor penyebaran penyakit.
                            </li>
                            <li>
                                <strong>Pembersihan Peralatan:</strong> Bersihkan dan desinfeksi alat-alat pertanian
                                setelah digunakan.
                            </li>
                            <li>
                                <strong>Pengelolaan Tanah dan Air:</strong> Pastikan drainase yang baik dan hindari
                                penggunaan air yang terkontaminasi untuk irigasi.
                            </li>
                        </ol>
                    </li>
                </ol>
            </Typography>
        </CardBody>

        <CardFooter NclassNameName="pt-0 justify-end flex">
            <Button onClick={handleOpen} className="bg-red-400">
                Selesai
            </Button>
        </CardFooter>
    </Card>

    <Dialog open={open} handler={handleOpen}>
        <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 text-black justify-center m-auto">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-xl lg:text-3xl font-semibold text-center">Berikan Umpan Balik</h2>
                <div className="flex flex-col items-center py-6 space-y-3">
                    <span className="text-center text-sm lg:text-lg">Apa pendapat anda setelah menggunakan Imato</span>
                    <div className="flex space-x-3">
                        {[1, 2, 3, 4, 5].map((rate) => (
                        <button key={rate} type="button" title={`Rate ${rate} stars`} aria-label={`Rate ${rate} stars`}
                            onClick={()=> handleRating(rate)}
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                className={`w-10 h-10 ${rating>= rate ? 'text-yellow-500' : 'text-gray-400'}`}
                                >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </button>
                        ))}
                    </div>
                </div>
                <Textarea size="md" label="Apa alasan penilaian anda"></Textarea>
            </div>
        </div>
        <DialogFooter>
            <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
                <span>Nanti saja</span>
            </Button>
            <Button className="bg-red-400" onClick={handleSubmit}>
                <span>Kirim</span>
            </Button>
        </DialogFooter>
    </Dialog>

</>
)
}
