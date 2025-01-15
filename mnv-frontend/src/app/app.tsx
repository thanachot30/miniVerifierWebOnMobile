import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Scan from '../pages/Scan';
import WebSocketDemo from '../pages/WebSocketDemo';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/qr" element={<Scan />} />
        {/* <Route path="/poc_web_socket" element={<WebSocketDemo />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
