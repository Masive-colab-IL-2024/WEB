import LayoutPage from "../../layout/LayoutPage";
import { Typography } from "@material-tailwind/react";
import { CardNews } from "../components/CardNews";
import Authors from '../assets/avatar.jpeg';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
export default function DetailsNews() {
    const { id } = useParams(); 
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [updatedAt, setUpdate] = useState('');

    useEffect(() => {
        fetchNewsById(id);
    }, [id]);

    const fetchNewsById = async (id) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_ENPOINT}/get_news/${id}`);
            const { data } = response.data;
            setTitle(data.title);
            setCategory(data.categories);
            setAuthor(data.author);
            setContent(data.content);
            setImage(data.image);
            setUpdate(data.updatedAt);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };
return (
<LayoutPage>
    <article className="px-6 py-16 mx-auto space-y-12 bg-white text-gray-900">
        <div className="w-full mx-auto space-y-4 ">
            <p className="text-xs font-semibold text-center tracking-wider uppercase">#{category}</p>
            <h1 className="text-xl font-bold text-center leading-tight md:text-5xl"> {title}
            </h1>
            <Typography className="text-sm text-gray-600">
                <div className="px-10 py-3 border-t border-gray-300">
                    <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                        <img src={Authors} alt=""
                            className="self-center flex-shrink-0 w-10 h-10 border rounded-full md:justify-self-start bg-gray-500 border-gray-300" />
                        <div className="flex flex-col">
                            <h4 className="text-sm lg:text-lg font-semibold">{author}  <span className="text-xs text-red-400 font-medium">publish {updatedAt}</span></h4>
                            <p className="text-gray-600">Cintailah, jaga,rawat dan obati alam dan jangan lupa ilmu padi.</p>
                        </div>
                    </div>
                    
                </div>
            </Typography>
        </div>
        <figure className="relative lg:h-screen lg:px-10 w-full">
            <img className="h-full w-full rounded-xl object-cover object-center"
                src={image}
                alt="nature image" />
        </figure>
        <div className="text-gray-800 text-lg lg:px-10">
            <div dangerouslySetInnerHTML={{ __html: content }} />;
        </div>
    </article>
    <CardNews title={'Rekomendasi'} count={3}/>
</LayoutPage>
)
}
