import './App.css';
import {Route,Routes} from "react-router-dom";
import Home from "./Pages/Home/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'animate.css'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
