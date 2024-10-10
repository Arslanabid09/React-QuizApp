import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <h2 className="text-3xl font-semibold text-gray-600 mt-4">Page Not Found</h2>
        <p className="text-lg text-gray-500 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition duration-200"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
