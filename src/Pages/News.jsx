import LayoutPage from "../../layout/LayoutPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'
import { CardNews } from "../components/CardNews";
import { Typography } from "@material-tailwind/react";
import Content from '../assets/content.jpg';
export default function News() {
return (
<LayoutPage>
    <section className=" text-gray-800 shadow-sm">
        <div className="container py-5 px-2 mx-auto space-y-6 sm:space-y-12">
            <a rel="noopener noreferrer" href="#"
                className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50">
                <img src={Content} alt=""
                    className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                <div className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Budidaya Tomat Untuk Para Petani</h3>
                    <span className="text-xs text-gray-600">February 19, 2021</span>
                    <p>Tomat menjadi tanaman yang mudah sekali dijumpai di Desa Tulungrejo, Kecamatan Kandangan, Malang. Salah satunya di pekarangan milik Gianto. Bagi petani, penghasilan dari budidaya tomat cukup menggiurkan</p>
                </div>
            </a>
           
        </div>
    </section>
    <CardNews title={''} count={6} />
</LayoutPage>
)
}
