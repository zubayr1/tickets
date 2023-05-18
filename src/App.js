import './App.css';
import Dashboard from './components/dashboard';
import Home from './components/home';
import Pagenotfound from './components/pagenotfound';
import Register from './components/register';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="register" element={<Register />} />
          <Route exact path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
