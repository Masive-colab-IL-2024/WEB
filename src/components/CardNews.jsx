import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Content from '../assets/content.jpg';
export function CardNews({title, count}) {
  return (
    <>
     <Typography className="text-3xl font-bold text-center pt-5 relative">
        {title}
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-1 bg-red-400"></span>
      </Typography>
    <div className="flex flex-wrap justify-center p-3 gap-6 mt-6">
        {[...Array(count)].map((_, index) => (
        <Card key={index} className="w-96 mt-10 bg-red-400 text-white">
            <CardHeader color="blue-gray" className="relative h-56">
                <img src={Content}
                    alt="card-image" />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="text-white" className="mb-2">
                  Budidaya Tomat
                </Typography>
                <Typography>
                    Tomat menjadi tanaman yang mudah sekali dijumpai di Desa ......
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 justify-end flex">
                <Link to="/news" className="hover:font-semibold hover:underline">Selanjutnya</Link>
            </CardFooter>
        </Card>
        ))}
    </div>
    </>
  );
}
