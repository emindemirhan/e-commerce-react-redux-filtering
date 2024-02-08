import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">E-Ticaret Logo</div>

        {/* Kullanıcı Girişi ve Sepet */}
        <div className="flex items-center space-x-4">
          {" "}
          <nav className="space-x-4">
            <a href="/" className="hover:text-gray-300">
              Ana Sayfa
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
