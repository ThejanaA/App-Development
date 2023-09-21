import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Pages/Sign-up';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
