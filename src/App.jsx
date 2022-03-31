import './App.scss';
import * as ReactDOM from "react-dom";
import LoginPage from "./components/Loginpage";
import { Routes, Route, Link } from "react-router-dom";
import LoginBit from './components/LoginBit';
import Acount from "./components/Acount";
import ForgotPassword from './components/ForgotPassword';
import ForgetPassword from './components/ForgetPassword';
import Topic from './components/Topic';
import Menu from './components/Menu';


function App() {
  return (
    <div className="App">
       <Routes>
         <Route path='/' element = {<LoginPage/>}/>
         <Route path='/login' element = {<LoginBit/>}/>
         <Route path='/acount' element = {<Acount/>}/>
         <Route path='/forgot' element = {<ForgotPassword/>}/>
         <Route path='/forget' element = {< ForgetPassword/>}/>
         <Route path='/topic' element = {<Topic/>}/>
         <Route path='menu' element = {<Menu/>}/>
       </Routes>
    </div>
  );
}

export default App;
