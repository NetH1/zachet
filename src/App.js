import Navbar from "./components/Navbar";
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import ModulesPage from "./pages/ModulesPage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Plushka from "./pages/Plushka";

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
    </div>
    <Routes>
        <Route path="/modules" element={<ModulesPage/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/plushka" element={<Plushka/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
