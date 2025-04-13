import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('./Pages/Home'));
const ContactPage = lazy(() => import('./Pages/ContactPage'));

function App() {
  return (
    <>
    <Router>
      <Suspense fallback={<div className="text-gray-400 text-center text-3xl mt-[100px] animate-pulse"> Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </Router>
     <ToastContainer position="top-right" autoClose={3000} />
     </>
  );
}

export default App;
