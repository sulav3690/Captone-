import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Detector from './pages/Detector';
import Result from './pages/Result';
import Report from './pages/Report';
import Subscription from './pages/Subscription';
import Payment from './pages/Payment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Dashboard Routes - eventually wrapped in a Layout */}
        <Route path="/dashboard" element={<Detector />} />
        <Route path="/result" element={<Result />} />
        <Route path="/report" element={<Report />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
