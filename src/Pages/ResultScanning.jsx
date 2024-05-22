import React, { useState } from 'react';
import LayoutPage from "../../layout/LayoutPage"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWandMagicSparkles, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Swal from "sweetalert2";
import Ex1 from '../assets/example1.webp';
import Ex2 from '../assets/example2.jpeg';
import Ex3 from '../assets/example3.jpeg';
import Ex4 from '../assets/example4.jpg';
import Ex5 from '../assets/content.jpg';
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
export default function ResultScanning() {
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
<LayoutPage>
    <>
        <Link to={'/scanning_images'}><Button className="bg-red-400 m-3">
            <FontAwesomeIcon className="mr-2" icon={faArrowLeft} /> Kembali
        </Button></Link>
        <div className="relative w-full flex gap-4 py-6 overflow-x-auto p-2 custom-scrollbar">
            <img className="h-48 aspect-video rounded-lg object-cover object-center bg-gray-500"
                src={Ex1} alt="Image 1" />
            <img className="h-48 aspect-video rounded-lg object-cover object-center bg-gray-500"
                src={Ex2} alt="Image 2" />
            <img className="h-48 aspect-video rounded-lg object-cover object-center bg-gray-500"
                src={Ex3} alt="Image 3" />
            <img className="h-48 aspect-video rounded-lg object-cover object-center bg-gray-500"
                src={Ex4} alt="Image 4" />
            <img className="h-48 aspect-video rounded-lg object-cover object-center bg-gray-500"
                src={Ex5} alt="Image 5" />
        </div>
        <Card className="mt-6 m-4">
            <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    <FontAwesomeIcon icon={faWandMagicSparkles} /> Tanaman kurang sehat
                </Typography>

                <Typography variant="h5" color="blue-gray" className="mb-2 mt-4">
                    Katakteristik
                </Typography>
                <Typography className="py-2 px-5">
                    <ol className="list-decimal">
                        <li>
                            Busuk Buah Antraknosa Penyebab : Adanya serangan dari Cendawan Colletotrichum coccodes (
                            Wallr.) Hughes. Penyakit tomat jenis ini biasanya menyerang buah, akar dan batang tanaman
                            tomat.Terdapat bercak kecil namun berair, berbentuk bulat dan cekung yang semakin melebar,
                            warnanya coklat, semakin lama berbentuk lingkaran yang berpusat pada satu titik dan
                            warnyanya semakin menghitam. Terdapat bercak ungu di dekat tangkai pada pangkal buah.
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
                            Busuk Buah Antraknosa Penyebab : Adanya serangan dari Cendawan Colletotrichum coccodes (
                            Wallr.) Hughes. Penyakit tomat jenis ini biasanya menyerang buah, akar dan batang tanaman
                            tomat.Terdapat bercak kecil namun berair, berbentuk bulat dan cekung yang semakin melebar,
                            warnanya coklat, semakin lama berbentuk lingkaran yang berpusat pada satu titik dan
                            warnyanya semakin menghitam. Terdapat bercak ungu di dekat tangkai pada pangkal buah.
                        </li>
                    </ol>
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 justify-end flex">
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
                                <button
                                key={rate}
                                type="button"
                                title={`Rate ${rate} stars`}
                                aria-label={`Rate ${rate} stars`}
                                onClick={() => handleRating(rate)}
                                >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className={`w-10 h-10 ${rating >= rate ? 'text-yellow-500' : 'text-gray-400'}`}
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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
</LayoutPage>
)
}
