import LayoutPage from "../../layout/LayoutPage";
import React, { useState, useRef } from 'react';
import { Typography, Button, Tooltip } from "@material-tailwind/react";
import backgroundImage from '../assets/background.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'
import Cam from '../assets/cam.png';
import Diagnosis from '../assets/diagnosis.png';
import Obat from '../assets/obat.png';
import { faUpload, faForward,faAngleRight} from '@fortawesome/free-solid-svg-icons'
export default function Scan() {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        setFile(droppedFile);
        setPreview(URL.createObjectURL(droppedFile));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile));
    };

    const handleReplaceImage = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile));
    };

    const handleResultScanning = () => {
        let timerInterval;
        Swal.fire({
            title: "Sedang Proses",
            timer: 2600,
            allowOutsideClick: false, 
            allowEscapeKey: false,    
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 2000);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire({
                    title: "Berhasil Scanning Gambar",
                    icon: "success",
                    confirmButtonColor: "#FF6868",
                    confirmButtonText: "Selanjutnya"
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = '/result_scanning';
                    }
                });
            }
        });
    }
    
return (
<LayoutPage>
    <div className="relative flex flex-col justify-between" style={{ backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover' , backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 flex flex-col ">
            <div className="px-3 py-2  lg:p-11 justify-center flex rounded-xl">
                <div className="mt-6 md:mt-10 border-2 border-white shadow-2xl text-white  bg-red-400 rounded-xl w-98 ">
                    <div className="py-5 px-4 lg:p-6 flex text-center justify-center">
                        <div className="flex text-center flex-col space-y-2">
                             <img alt="" class="w-12 h-12 m-auto rounded ring-2 ring-offset-4 bg-white ring-violet-600 ring-offset-gray-100" src={Cam}/>
                            <Typography className="text-xs lg:text-lg">Ambil Gambar</Typography> <br />
                        </div>
                        <div className="flex text-center p-3 font-extrabold flex-col space-y-2">
                            <Typography><FontAwesomeIcon className="text-2xl lg:text-3xl" icon={faAngleRight} /></Typography> 
                        </div>
                        <div className="flex text-center flex-col space-y-2">
                            <img alt="" class="w-12 h-12 m-auto rounded ring-2 ring-offset-4 bg-white ring-violet-600 ring-offset-gray-100" src={Diagnosis}/>
                            <Typography className="text-xs lg:text-lg">Lihat Diagnosis</Typography> <br />
                        </div>
                        <div className="flex text-center p-3 font-extrabold flex-col space-y-2">
                            <Typography><FontAwesomeIcon className="text-2xl lg:text-3xl" icon={faAngleRight} /></Typography> 
                        </div>
                        <div className="flex text-center flex-col space-y-2">
                            <img alt="" class="w-12 h-12 m-auto rounded ring-2 ring-offset-4 bg-white ring-violet-600 ring-offset-gray-100" src={Obat}/>
                            <Typography className="text-xs lg:text-lg">Dapatkan Obat</Typography> <br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-3 py-2 lg:p-11 justify-center flex rounded-xl">
                <div className="mt-6 md:mt-10 text-white bg-white shadow-md rounded-xl w-full lg:w-9/12">
                    <div className="p-6">
                        <p className="font-sans text-base md:text-lg lg:text-xl font-light leading-relaxed">
                        <div>
                            <label className={`flex justify-center items-center w-full px-4 transition-all h-36
                                duration-300 ${isDragging ? 'opacity-50 border-green-700 border-4'
                                : 'opacity-100 border-gray-300 border-2 ' } bg-white border-dashed rounded-md
                                appearance-none cursor-pointer hover:border-gray-400 focus:outline-none`}
                                onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave}>
                                <span className="p-5">
                                    <div className="flex justify-center">
                                        <span className="font-medium text-gray-600">
                                            <input type="file" ref={fileInputRef} name="file_upload" className="hidden"
                                                onChange={handleFileChange} />
                                            <Button onClick={handleButtonClick} className="bg-red-400">
                                                <FontAwesomeIcon icon={faUpload} /> Unggah File
                                            </Button>
                                        </span>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-gray-600 font-semibold text-center">atau tarik file
                                        </span> <br />
                                        {file && (
                                        <span className="text-green-600">( {file.name} )</span>
                                        )}
                                    </div>
                                </span>
                            </label>
                            <div>
                                {file && (
                                <Button onClick={handleResultScanning} className="bg-red-400 ml-auto my-4  flex">Selanjunya
                                    <FontAwesomeIcon className="text-sm ml-2" icon={faForward} />
                                </Button>
                                )}
                            </div>
                            {file && (
                            <figure className="relative h-screen w-full p-5">
                                <img className="h-full w-full rounded-xl object-cover object-center" src={preview}
                                    alt="nature image" />
                                <figcaption
                                    className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                                    <Typography variant="h6" color="blue-gray">
                                        {file.name}
                                    </Typography>
                                    <input type="file" className="hidden" ref={fileInputRef}
                                        onChange={handleReplaceImage} />
                                </figcaption>
                            </figure>
                            )}
                        </div>
                        </p>

                    </div>
                </div>
            </div>

        </div>
    </div>
</LayoutPage>
)
}