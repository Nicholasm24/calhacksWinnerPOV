import ProgressBar from './progressBar';
import Modal from './Modal';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div>
            <a href="#" className="text-white text-lg font-semibold">
              Treenance
            </a>
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Dashboard
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Reports
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Settings
            </a>
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <div className="container mx-auto mt-8 px-4 flex space-x-6">
        {/* Main Content */}
        <ProgressBar percentage={50} />
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4">Treenance</h1>
          {/* Grass Field */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-green-500 h-24 rounded-lg">
              <Modal title="hey" content="hi" />
            </div>
            <div className="bg-green-400 h-20 rounded-lg">
              <Modal />
            </div>
            <div className="bg-green-300 h-16 rounded-lg">
              <Modal />
            </div>
            <div className="bg-green-500 h-20 rounded-lg">
              <Modal />
            </div>
            <div className="bg-green-400 h-24 rounded-lg">
              <Modal />
            </div>
            <div className="bg-green-300 h-16 rounded-lg">
              <Modal />
            </div>
            <div className="bg-green-500 h-20 rounded-lg">
              <Modal />
            </div>
            <div className="bg-green-400 h-24 rounded-lg">
              <Modal />
            </div>
            <div className="bg-green-300 h-20 rounded-lg">
              <Modal />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


{/* <label className='block'>Income</label>
<input className='block rounded-md'></input>
<label className='block'>Income</label>
<input className='block rounded-md'></input> */}