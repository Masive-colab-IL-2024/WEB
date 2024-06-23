import LayoutDashboard from "../../../layout/LayoutDashboard";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashCan, faFilePen } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import Swal from 'sweetalert2';
import {
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Avatar,
    Input,
} from "@material-tailwind/react";

const TABLE_HEAD = ["No", "Title", "Image", "Content", "Category", "Author", "Updated At", "Actions"];

export default function Berita() {
    const [berita, setBerita] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_ENPOINT}/get_news/`);
            setBerita(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const onDelete = (row) => {
        Swal.fire({
            title: 'Anda yakin?',
            text: `Anda akan menghapus ${row.title}. Tindakan ini tidak dapat dibatalkan.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.post(`${import.meta.env.VITE_ENPOINT}/get_news/delete/${row.slug}`);
                    if (response.status === 200) {
                        Swal.fire(
                            'Berhasil!',
                            `${row.title} telah dihapus.`,
                            'success'
                        ).then(() => {
                            fetchNews(); // Reload data setelah menghapus
                        });
                    } else {
                        Swal.fire(
                            'Error!',
                            'Gagal menghapus berita.',
                            'error'
                        );
                    }
                } catch (error) {
                    Swal.fire(
                        'Error!',
                        'Gagal menghapus berita.',
                        'error'
                    );
                }
            }
        });
    };

    // Filter berita berdasarkan judul yang mengandung searchTerm
    const filteredBerita = berita.filter(item => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <LayoutDashboard>
            <div className="p-5">
                <Card className="h-full w-full">
                    <CardHeader floated={false} shadow={false} className="rounded-none">
                        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                            <div>
                                <Typography variant="h5" color="blue-gray">
                                    List postingan berita Imato
                                </Typography>
                                <Typography color="gray" className="mt-1 font-normal">
                                    Terdapat ( {berita.length} ) yang sudah dipublish
                                </Typography>
                            </div>
                            <div className="flex w-full shrink-0 gap-2 md:w-max">
                                <div className="w-full md:w-72">
                                    <Input
                                        label="Search"
                                        icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                                        onChange={handleSearch}
                                        value={searchTerm}
                                    />
                                </div>
                                <Link to={'/dashboard/berita/add'} className="flex items-center gap-3">
                                    <Button className="bg-[#F84E45]">
                                        <FontAwesomeIcon icon={faPlus} /> Buat Postingan
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody className="overflow-scroll px-0">
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBerita.map((row, i) => (
                                    <tr key={i}>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-3">
                                                <Typography variant="small" color="blue-gray" className="font-bold">
                                                    {i + 1}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-3">
                                                <Typography variant="small" color="blue-gray" className="font-bold">
                                                    {row.title}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-3">
                                                <Avatar src={row.image} alt={row.title} size="md" className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1" />
                                            </div>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-3">
                                                <Typography variant="small" color="blue-gray" className="font-bold">
                                                    {row.content.replace(/<[^>]*>/g, '').split(' ').slice(0, 5).join(' ')}..
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-3">
                                                <Typography variant="small" color="blue-gray" className="font-bold">
                                                    {row.categories}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-3">
                                                <Typography variant="small" color="blue-gray" className="font-bold">
                                                    {row.author}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-3">
                                                <Typography variant="small" color="blue-gray" className="font-bold">
                                                    {row.updatedAt.split("T")[0]}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <div className="flex items-center gap-3">
                                                <Link to={'/dashboard/berita/' + row.slug}>
                                                    <Button variant="text" color="blue-gray" className="p-2">
                                                        <FontAwesomeIcon icon={faFilePen} />
                                                    </Button>
                                                </Link>
                                                <Button variant="text" color="blue-gray" className="p-2" onClick={() => onDelete(row)}>
                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CardBody>
                </Card>
            </div>
        </LayoutDashboard>
    );
}
