import LayoutPage from "../../layout/LayoutPage"
import React, { useState } from 'react';
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
export default function Authentication() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const data = [
        {
          label: "Login",
          value: "login",
          desc: `Masuk Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        },
        {
          label: "Register",
          value: "register",
          desc: `Register Lorem Ipsum is simply dummy text of the printing and typesetting industry..`,
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
                                                        Username
                                                    </Typography>
                                                    <Input
                                                        type="text"
                                                        placeholder="Enter your Username"
                                                        className=" !border-t-blue-gray-200 rounded-full focus:!border-t-gray-900"
                                                        labelProps={{
                                                        className: "before:content-none after:content-none",
                                                        }}
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
                                                        className="!border-t-blue-gray-200 rounded-full focus:!border-t-gray-900"
                                                        labelProps={{
                                                            className: "before:content-none after:content-none",
                                                        }}
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
                                                    <Button className="bg-red-400">Login</Button>
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
                                                        placeholder="Enter your Email Address"
                                                        className=" !border-t-blue-gray-200 rounded-full focus:!border-t-gray-900"
                                                        labelProps={{
                                                        className: "before:content-none after:content-none",
                                                        }}
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
                                                        placeholder="Enter your User name"
                                                        className=" !border-t-blue-gray-200 rounded-full focus:!border-t-gray-900"
                                                        labelProps={{
                                                        className: "before:content-none after:content-none",
                                                        }}
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
                                                        className="!border-t-blue-gray-200 rounded-full focus:!border-t-gray-900"
                                                        labelProps={{
                                                            className: "before:content-none after:content-none",
                                                        }}
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={showPassword ? faEyeSlash : faEye}
                                                        className="absolute right-3 top-9 p-1 cursor-pointer text-blue-gray-400"
                                                        onClick={togglePasswordVisibility}
                                                    />
                                                </div>
                                                <div className="flex ml-auto">
                                                    <Button className="bg-red-400">Daftar</Button>
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