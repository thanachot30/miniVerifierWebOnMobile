import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Scan from '../pages/Scan';
import WebSocketDemo from '../pages/WebSocketDemo';
import WebCrytoApi from '../pages/WebCrytoApi';
import DisplayResult from '../pages/DisplayResult';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/qr" element={<Scan />} />
        <Route path="/result" element={<DisplayResult />} />
        {/* <Route path="/" element={<WebCrytoApi />} /> */}
        <Route path="/websocket" element={<WebSocketDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
