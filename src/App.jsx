import Beranda from "./Pages/Beranda";
import DetailsNews from "./Pages/DetailsNews";
import Scan from "./Pages/Scan";
import News from "./Pages/News";
import ResultScanning from "./Pages/ResultScanning";
import Authentication from "./Pages/Authentication";
import History from "./Pages/History";
import Berita from "./Pages/Dashboard/Berita";
import AddBerita from "./Pages/Dashboard/AddBerita";
import EditBerita from "./Pages/Dashboard/EditBerita";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
return (
<Router>
    <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/details/:id" element={<DetailsNews />} />
        <Route path="/scanning_images" element={<Scan />} />
        <Route path="/result_scanning/:id" element={<ResultScanning />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/history" element={<History />} />
        <Route path="/dashboard/berita" element={<Berita />} />
        <Route path="/dashboard/berita/add" element={<AddBerita />} />
        <Route path="/dashboard/berita/:id" element={<EditBerita />} />
    </Routes>
</Router>
)
}

export default App
