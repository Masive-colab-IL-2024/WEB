import LayoutDashboard from "../../../layout/LayoutDashboard";
import { useState } from 'react';
import { Card, Typography, Input, Button } from "@material-tailwind/react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import axios from 'axios';
import Swal from 'sweetalert2'

export default function AddBerita() {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleContentChange = (value) => {
        setContent(value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', image);
        formData.append('categories', category);
        formData.append('author', author);
        formData.append('content', content);

        try {
            const response = await axios.post('http://localhost:5000/create_news', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            if(response.status == 201){
                Swal.fire({
                    title: 'Berita berhasil diupload',
                    icon: "success",
                    confirmButtonColor: "#FF6868",
                    confirmButtonText: "Selanjutnya",
                    allowOutsideClick: false, 
                    allowEscapeKey: false,   
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = '/dashboard/berita/';
                    }
                });
            }
            console.log('News created successfully:', response.data);
        } catch (error) {
            console.error('Error creating news:', error);
        }
    };

    return (
        <LayoutDashboard>
            <div className="p-5">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Tambah Postingan Berita
                    </Typography>
                    <form className="mt-8 mb-2 w-full max-w-4xl mx-auto" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="mb-1">
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    Judul:
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="Judul Berita"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                            </div>
                            <div className="mb-1">
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    Gambar URL:
                                </Typography>
                                <Input
                                    type="file"
                                    size="lg"
                                    onChange={handleImageChange}
                                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                            </div>
                            <div className="mb-1">
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    Kategori:
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="Kategori"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                            </div>
                            <div className="mb-1">
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    Penulis:
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="Penulis"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                            </div>
                            <div className="mb-10 sm:col-span-2">
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    Konten:
                                </Typography>
                                <ReactQuill
                                    theme="snow"
                                    value={content}
                                    onChange={handleContentChange}
                                    className="!border-t-blue-gray-200 focus:!border-t-gray-900 h-96"
                                />
                            </div>
                        </div>
                        <Button type="submit" className="mt-6 w-full">
                            Simpan
                        </Button>
                    </form>
                </Card>
            </div>
        </LayoutDashboard>
    );
}
