import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/LoginPage';
import Home from '../pages/HomePage';
import Scan from '../pages/ScanPage';
import WebSocketDemo from '../components/WebSocketDemo';
import WebCrytoApi from '../components/WebCrytoApi';
import DisplayResult from '../pages/DisplayResultPage';
import Layout from '../components/Layout';
import BackLayout from '../components/BackLayout';
import ErrorPage from '../pages/ErrorPagePage';
import SignUpPage from '../pages/SignUpPage';
import SettingPage from '../pages/SettingPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/result" element={<DisplayResult />} />
        <Route path="/error" element={<ErrorPage />} />
        {/* <Route path="/result" element={<DisplayResult />} /> */}
        {/* <Route path="/" element={<WebCrytoApi />} />
        {/* <Route path="/websocket" element={<WebSocketDemo />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
