import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navigation */}
      <nav className="bg-blue-800 text-white p-4 shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold hover:text-blue-300">NFL Analytics</Link>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
            {/* Add more links as pages are created */}
            <li><Link to="/players" className="hover:text-blue-300">Players</Link></li>
            <li><Link to="/teams" className="hover:text-blue-300">Teams</Link></li>
            <li><Link to="/games" className="hover:text-blue-300">Games</Link></li>
            {/* Add other links like Compare, Stats, etc. */}
          </ul>
        </div>
      </nav>

      {/* Main Content Area - Renders the matched route component */}
      <main className="container mx-auto p-6 flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-700 text-white p-4 text-center mt-auto">
        NFL Analytics App © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Layout; 