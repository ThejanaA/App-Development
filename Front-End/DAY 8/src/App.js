import Login from './Pages/Login';
import SignUp from './Pages/Sign-up';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from '../src/Pages/DashBoard/Dashboard';
import HomePage from './Pages/HomePage';
import Terms from './Pages/TermsandConditions';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import FAQ from './Components/FAQ';
import TermsAndConditions from './Pages/TermsandConditions';
import AdminLogin from './Pages/AdminLogin';
import AdminSignUp from './Pages/AdminSign';
import AdminDashBoard from '../src/Pages/AdminDashBoard/AdminDashBoard';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/dash" element={<DashBoard />} />
            <Route path="/terms" element={<TermsAndConditions/>}/>
            <Route path="/aboutus" element={<AboutUs />}/>
            <Route path="/FAQ" element={<FAQ />}/>
            <Route path="/adminlogin" element={<AdminLogin />}/>
            <Route path="/adminSignup" element={<AdminSignUp />}/>
            <Route path="/admindash" element={<AdminDashBoard />} />

         
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
