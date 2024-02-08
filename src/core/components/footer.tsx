import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        {/* Copyright Bilgisi */}
        <p className="text-sm">
          &copy; 2024 E-Ticaret Şirketi. Tüm hakları saklıdır.
        </p>

        {/* Sosyal Medya Bağlantıları */}
        <div className="flex justify-center mt-4 space-x-4">
          <a href="/" className="text-white hover:text-gray-300">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="/" className="text-white hover:text-gray-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/" className="text-white hover:text-gray-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
