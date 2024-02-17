import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="bg-gray-200">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div>
            <a href="#" className="text-white text-lg font-semibold">Treenance</a>
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Home</a>
            <a href="#" className="text-gray-300 hover:text-white">Dashboard</a>
            <a href="#" className="text-gray-300 hover:text-white">Reports</a>
            <a href="#" className="text-gray-300 hover:text-white">Settings</a>
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-2xl font-semibold mb-4">Welcome to Your Dashboard</h1>
        <p className="text-gray-600">This is a basic example of a dashboard with a navigation bar at the top using Tailwind CSS.</p>
      </div>
    </div>
  );
}

export default App;
