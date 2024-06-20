import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Early_blight from './Early_blight';
import BacterialSport from './BacterialSport';
export default function Diagnosis() {
    const { id } = useParams(); 
    const [result, setresult] = useState('');

    useEffect(() => {
        fetchNewsById(id);
    }, [id]);

    const fetchNewsById = async (id) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_ENPOINT}/get_history/${id}`);
            const { data } = response.data;
            setresult(data.predicted_class);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };
return (
 <>
   {result == 'early_blight' ? (
    <Early_blight/>
   ) : result == 'bacterial_spot' ? (
    <BacterialSport />
   ) : ''}
 </>
)
}
