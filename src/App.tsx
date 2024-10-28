import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home.tsx";
import Error from './pages/Error.tsx';
import Header from "./layouts/Header.tsx";
import Footer from "./layouts/Footer.tsx";
import "@/styles/index.scss";

function App() {
  return (
      <BrowserRouter>
        <div id="app">
            <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/*" element={<Error/>}/>
          </Routes>
            <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App
