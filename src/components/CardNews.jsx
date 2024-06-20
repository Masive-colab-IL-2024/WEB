import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import axios from 'axios';
import Content from '../assets/content.jpg';

export function CardNews({ pageRillis, count }) {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_ENPOINT}/get_news/`);
      setNewsList(response.data.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <>
      {pageRillis ? (
        <Typography className="text-3xl font-bold text-center pt-5 relative">
          {pageRillis}
        </Typography>
      ) : ''}
      <div className="flex flex-wrap justify-center p-3 gap-6 mt-6">
        {newsList.slice(0,count).map((news, index) => (
          <Card key={index} className="w-96 mt-10 bg-red-400 text-white">
            <CardHeader color="blue-gray" className="relative h-56">
              <img src={news.image ? news.image : Content} alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="text-white" className="mb-2">
                {news.title}
              </Typography>
              <Typography>
                {news.content.replace(/<[^>]*>/g, '').split(' ').slice(0, 5).join(' ')}..
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 justify-end flex">
              <Link to={`/news/details/${news.slug}`} className="hover:font-semibold hover:underline">
                Selengkapnya
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
