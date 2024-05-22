import Beranda from "./Pages/Beranda";
import DetailsNews from "./Pages/DetailsNews";
import Scan from "./Pages/Scan";
import News from "./Pages/News";
import ResultScanning from "./Pages/ResultScanning";
import Authentication from "./Pages/Authentication";
import History from "./Pages/History";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/details" element={<DetailsNews />} />
      <Route path="/scanning_images" element={<Scan />} />
      <Route path="/result_scanning" element={<ResultScanning />} />
      <Route path="/authentication" element={<Authentication />} />
      <Route path="/history" element={<History />} />
    </Routes>
  </Router>
  )
}

export default App
