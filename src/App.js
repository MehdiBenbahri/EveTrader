import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'animate.css'
import NotFound from "./Pages/Error/NotFound";
import Register from "./Pages/Register/Register";
import {checkApiAccess} from "./Services/LocaleStorage";
import {refreshToken} from "./Services/AuthService";
function App() {

    if (!checkApiAccess()) {
        //try to refresh token
        refreshToken();
    }

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
