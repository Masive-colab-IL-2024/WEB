import LayoutPage from "../../layout/LayoutPage";
import { CardNews } from "../components/CardNews";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function News() {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_ENPOINT}/get_news/`);
                if (response.status === 200) {
                    setNewsList(response.data.data); 
                } else {
                    console.error('Failed to fetch news:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);
return (
<LayoutPage>
    <section className=" text-gray-800 shadow-sm">
        <div className="container py-5 px-2 mx-auto space-y-6 sm:space-y-12">
        {newsList.slice(0,1).map((news) => (
            <>
            <a rel="noopener noreferrer" href={`/news/details/${news.slug}`}
                className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50">
                <img src={news.image} alt=""
                    className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                <div className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Budidaya Tomat Untuk Para Petani</h3>
                    <span className="text-xs text-gray-600">{news.updatedAt}</span>
                    <p><span dangerouslySetInnerHTML={{ __html: news.content.split(' ').slice(0, 25).join(' ') }} /></p>
                </div>
            </a>
            </>
           ))}
        </div>
    </section>
    <CardNews pageRillis={' '} count={6} />
</LayoutPage>
)
}
