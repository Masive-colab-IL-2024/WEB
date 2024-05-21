import React from 'react';
import backgroundImage from '../assets/background.webp';
import { Button } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
    return (
        <div className="relative flex flex-col justify-between" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="z-10 flex flex-col ">
                <div className="p-11 rounded-xl">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-medium text-white">Selamat Datang</h1>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white">IMATO</h1>
                    <div className="mt-6 md:mt-10 text-white bg-red-500 opacity-70 shadow-md rounded-xl md:w-96 lg:w-120">
                        <div className="p-6">
                            <p className="font-sans text-base md:text-lg lg:text-xl font-light leading-relaxed">
                                Imato adalah platform yang membantu mengetahui permasalahan tentang tanaman tomat Anda
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mr-10 mb-4">
                    <Button className="bg-red-500">Selanjutnya <FontAwesomeIcon icon={faAnglesRight} /></Button>
                </div>
            </div>
        </div>
    );
}
