import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' //{}는 객체는 제이슨 단 하나라 생략가능
import Bmi from "./hello/Bmi";
import Calc from "./hello/Calc";
import Grade from "./hello/Grade";
import Login from "./hello/Login";
import Hello from "./hello/Hello";
import Home from "./hello/home";
const App= x =>{
return(
    <div>
<Router>
    <Routes>
    <Route expected path="/" element={<Home/>}/>
            <Route path="/bmi" element={<Bmi/>}/>
            <Route path="/calc" element={<Calc/>}/>
            <Route path="/grade" element={<Grade/>}/>
            <Route path="/login" element={<Login/>}/>
    </Routes>
</Router> 
</div>
)
}
export default App;