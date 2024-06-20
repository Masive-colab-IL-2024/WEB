import LayoutPage from "../../layout/LayoutPage"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Diagnosis from '../components/Diagnosis';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {
        Button,
    } from "@material-tailwind/react";
export default function ResultScanning() {
   

return (
<LayoutPage>
    <>
        <Link to={'/scanning_images'}><Button className="bg-red-400 m-3">
            <FontAwesomeIcon className="mr-2" icon={faArrowLeft} /> Kembali
        </Button></Link>
        <Diagnosis />
        
    </>
</LayoutPage>
)
}
