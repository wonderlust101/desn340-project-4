import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import BikeShop from "./pages/BikeShop";
import AlbertaTrafficSafetyAct from "./pages/AlbertaTrafficSafetyAct";
import HelpCenter from "./pages/HelpCenter";

const basename: string = import.meta.env.BASE_URL;

export default function App() {

    return (
        <BrowserRouter basename={basename}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/bike-shop" element={<BikeShop />} />
                <Route path="/alberta-traffic-safety-act" element={<AlbertaTrafficSafetyAct />} />
                <Route path="/help-center" element={<HelpCenter />} />
            </Routes>
        </BrowserRouter>
    );
}
