import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Sayfa Bulunamadı</h1>
        <p className="text-lg mb-4">Aradığınız sayfa maalesef bulunamadı.</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Ana Sayfa'ya dön
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
