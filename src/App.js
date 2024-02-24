
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Slidebar from './component/Slidebar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Fragrances from './pages/Fragrances';
import Men from './pages/Men';
import Women from './pages/Women';
import Products from './pages/Products';
import Cartpage from './pages/Cartpage';
import DetailForm from './pages/DetailForm';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Home/>} /> */}
        <Route path='/fragrance' element={<Fragrances/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Women/>} />
        <Route path='/pro' element={<Products/>} />
        <Route path='/btn' element={<Cartpage />} />
        <Route path='/checkout' element={<DetailForm />} />




      </Routes>
      <Footer/>
      </BrowserRouter>
     {/* <Navbar /> */}
     {/* <Slidebar/> */}
     {/* <Footer/> */}
   
   
    </div>
  );
}

export default App;
