import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import DetailBlog from './pages/DetailBlog';
import Home from './pages/Home';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:slug" element={<DetailBlog />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
