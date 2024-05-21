import LayoutPage from "../../layout/LayoutPage";
import backgroundImage from '../assets/background.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
export default function History() {
    return (
        <LayoutPage>
            <Card className="w-full ">
                <CardHeader
                        className="m-0 h-20 rounded-none"
                    >
                        <img
                        src={backgroundImage}
                        alt="card-image"
                        className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-6  text-white">
                             <Link to={'/scanning_images'} className=" pt-5 lg:text-2xl">
                                <FontAwesomeIcon icon={faChevronLeft} /> Riwayat
                            </Link>
                        </div>
                </CardHeader>
            </Card>
            <Card className="p-4">
                <Typography className="text-xl my-4 font-bold">Hari Ini</Typography>
                <Card className="w-full bg-red-400 lg:p-5 lg:flex-row">
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="m-0 lg:w-1/5 shrink-0 rounded-lg "
                    >
                        <img
                        src={backgroundImage}
                        alt="card-image"
                        className="h-full w-full object-cover"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h6" color="gray" className="mb-4 uppercase text-white ">
                        Karakteristik
                        </Typography>
                        <Typography color="gray" className="font-normal text-white ">
                        <ol className="list-decimal px-5">
                            <li>Daun berlubang </li>
                            <li>Daun berlubang bercak coklat pada buah yang membesar dan membusuk</li>
                        </ol>
                        </Typography>
                    </CardBody>
                    <CardBody>
                        <Typography variant="h6" color="gray" className="mb-4 uppercase text-white ">
                        Penanganan
                        </Typography>
                        <Typography color="gray" className="font-normal">
                        <ol className="list-decimal px-5 text-white ">
                            <li>Gunakan varietas tahan penyakit, rotasi tanaman, sanitasi lahan, pemupukan seimbang, jaga jarak tanam, hindari penyiraman berlebihan</li>
                        </ol>
                        </Typography>
                    </CardBody>
                </Card>
            </Card>
            <Card className="p-4">
                <Typography  raphy className="text-xl my-4 font-bold">12 Mei 2024</Typography>
                {[...Array(5)].map((_, index) => (
                    <>
                        <Card className="w-full my-3 bg-red-400 lg:p-5 lg:flex-row">
                            <CardHeader
                                shadow={false}
                                floated={false}
                                className="m-0 lg:w-1/5  shrink-0 rounded-lg "
                            >
                                <img
                                src={backgroundImage}
                                alt="card-image"
                                className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h6" color="gray" className="mb-4 uppercase text-white ">
                                Karakteristik
                                </Typography>
                                <Typography color="gray" className="font-normal text-white ">
                                <ol className="list-decimal px-5">
                                    <li>Daun berlubang </li>
                                    <li>Daun berlubang bercak coklat pada buah yang membesar dan membusuk</li>
                                </ol>
                                </Typography>
                            </CardBody>
                            <CardBody>
                                <Typography variant="h6" color="gray" className="mb-4 uppercase text-white ">
                                Penanganan
                                </Typography>
                                <Typography color="gray" className="font-normal">
                                <ol className="list-decimal px-5 text-white ">
                                    <li>Gunakan varietas tahan penyakit, rotasi tanaman, sanitasi lahan, pemupukan seimbang, jaga jarak tanam, hindari penyiraman berlebihan</li>
                                </ol>
                                </Typography>
                            </CardBody>
                        </Card>
                    </>
                ))}
            </Card>
        </LayoutPage>
    )
}
