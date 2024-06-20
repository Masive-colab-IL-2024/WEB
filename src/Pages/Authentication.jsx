import LayoutPage from "../../layout/LayoutPage"
import { useState } from 'react';
import axios from 'axios';
import showAlert from "../components/showAlert";
import backgroundImage from '../assets/background.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Checkbox,
    Input,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  
import Cookies from 'js-cookie';

export default function Authentication() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: ''
    });

    const [formLogin, setLogin] = useState({
        email: '',
        password: ''
    });
    

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleChangeLogin = (e) => {
        setLogin({
            ...formLogin,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_ENPOINT}/register`, formData);
            if (response.status === 200) {
                showAlert('success', response.data.pesan); 
                Cookies.set('accessToken', response.data.accessToken);
                Cookies.set('name', response.data.name);
                Cookies.set('email', response.data.email);
                setTimeout(() => {
                    window.location.href = '/scanning_images';
                }, 2000);
            } else {
                showAlert('error', response.data.pesan); 
            }
            
        } catch (error) {
            showAlert('error', error.response.data.pesan); 
        }
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_ENPOINT}/login`, formLogin);
            if (response.status === 200) {
                showAlert('success', response.data.pesan); 
                Cookies.set('accessToken', response.data.data.accessToken);
                Cookies.set('refreshToken', response.data.data.refreshToken);
                Cookies.set('name', response.data.data.name);
                Cookies.set('email', response.data.data.email);
                setTimeout(() => {
                    window.location.href = '/scanning_images';
                }, 2000);
            } else {
                showAlert('error', response.data.pesan); 
            }
        } catch (error) {
            showAlert('error', error.response.data.pesan); 
        }
    };
    

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const data = [
        {
          label: "Login",
          value: "login",
          desc: `Masuk ke akun Anda dengan menggunakan informasi login yang telah Anda daftarkan sebelumnya.`,
        },
        {
          label: "Register",
          value: "register",
          desc: `Daftar untuk membuat akun baru dan bergabunglah dengan komunitas kami. `,
        },
     
        
      ];
    return (
        <LayoutPage>
            <div className="p-5">
                <Card className="w-full px-3 py-5 lg:flex-row">
                    <CardHeader
                        shadow={true}
                        floated={true}
                        className="m-0 lg:w-2/5 shrink-0 lg:rounded-r-none"
                    >
                        <img
                        src={backgroundImage}
                        alt="card-image"
                        className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-2 lg:p-10 text-white">
                            <Typography className="font-bold lg:text-4xl">
                                IMATO
                            </Typography>
                            <Typography className="font-sans">
                                 Mudah Bertanam Tomat
                            </Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="ml-auto">
                        <Typography variant="h6" color="gray" className="mb-4 text-center uppercase">
                              Welcome to IMATO
                        </Typography>
                        <Tabs id="custom-animation" className="lg:p-10" value="login">
                            <TabsHeader className="bg-[#F8EDDD] shadow-inner rounded-full" indicatorProps={{
                                    className: "bg-red-400 shadow border-2 border-white rounded-full ",
                                    }}>
                                {data.map(({ label, value }) => (
                                <Tab className="lg:p-2 font-bold rounded-lg" key={value} value={value}>
                                    <span >{label}</span>
                                </Tab>
                                ))}
                            </TabsHeader>
                            <TabsBody
                                animate={{
                                initial: { y: 250 },
                                mount: { y: 0 },
                                unmount: { y: 250 },
                                }}
                            >
                                {data.map(({ value, desc }) => (
                                    <>
                                    <TabPanel key={value} value={value}>
                                        <Typography className="mb-4 text-center lg:text-lg text-medium text-xs">
                                            {desc}
                                        </Typography>
                                          {value == 'login' ? 
                                            <form className="mt-12 flex flex-col gap-4">
                                                <div>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="mb-2 font-medium"
                                                    >
                                                        Email
                                                    </Typography>
                                                    <Input
                                                        type="text"
                                                        name="email"
                                                        placeholder="Enter your Username"
                                                        className=" !border-t-blue-gray-200 rounded-full focus:!border-t-gray-900"
                                                        labelProps={{
                                                        className: "before:content-none after:content-none",
                                                    }}
                                                     onChange={handleChangeLogin}
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="mb-2 font-medium"
                                                    >
                                                        Password
                                                    </Typography>
                                                    <Input
                                                        type={showPassword ? "text" : "password"}
                                                        name="password"
                                                        className="!border-t-blue-gray-200 rounded-full focus:!border-t-gray-900"
                                                        labelProps={{
                                                            className: "before:content-none after:content-none",
                                                        }}
                                                      onChange={handleChangeLogin}
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={showPassword ? faEyeSlash : faEye}
                                                        className="absolute right-3 top-9 p-1 cursor-pointer text-blue-gray-400"
                                                        onClick={togglePasswordVisibility}
                                                    />
                                                </div>
                                                <div>
                                                    <Checkbox color="red" label="Ingat Saya" />
                                                </div>
                                                <div className="flex ml-auto">
                                                    <Button onClick={handleLogin} className="bg-red-400">Login</Button>
                                                </div>
                                            </form>  
                                         :
                                            <form className="mt-12 flex flex-col gap-4">
                                                <div>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="mb-2 font-medium"
                                                    >
                                                        Email Address
                                                    </Typography>
                                                    <Input
                                                        type="email"
                                                        name="email" 
                                                        placeholder="Enter your Email Address"
                                                        className=" !border-t-blue-gray-200 rounded-full focus:!border-t-gray-900"
                                                        labelProps={{
                                                        className: "before:content-none after:content-none",
                                                        }}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="mb-2 font-medium"
                                                    >
                                                        Username
                                                    </Typography>
                                                    <Input
                                                        type="text"
                                                        name="name" 
                                                        placeholder="Enter your User name"
                                                        className=" !border-t-blue-gray-200 rounded-full focus:!border-t-gray-900"
                                                        labelProps={{
                                                        className: "before:content-none after:content-none",
                                                        }}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="mb-2 font-medium"
                                                    >
                                                        Password
                                                    </Typography>
                                                    <Input
                                                        type={showPassword ? "text" : "password"}
                                                        name="password" 
                                                        className="!border-t-blue-gray-200 rounded-full focus:!border-t-gray-900"
                                                        labelProps={{
                                                            className: "before:content-none after:content-none",
                                                        }}
                                                        onChange={handleChange}
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={showPassword ? faEyeSlash : faEye}
                                                        className="absolute right-3 top-9 p-1 cursor-pointer text-blue-gray-400"
                                                        onClick={togglePasswordVisibility}
                                                    />
                                                </div>
                                                <div className="flex ml-auto">
                                                    <Button className="bg-red-400"  onClick={handleRegister}>Daftar</Button>
                                                </div>
                                            </form>  
                                        } 
                                    </TabPanel>
                                    </>
                                ))}
                            </TabsBody>
                        </Tabs>
                    </CardBody>
                </Card>
            </div>
        </LayoutPage>
    )
}