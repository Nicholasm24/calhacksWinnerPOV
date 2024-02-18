import ProgressBar from './progressBar';
import Modal from './Modal';
import './App.css';

function App() {
  const modal11 = (
    <div className="grid grid-cols-2 gap-2">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAnswer11(1)}>Paris</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAnswer11(2)}>London</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAnswer11(3)}>Berlin</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAnswer11(4)}>Madrid</button>
    </div>
  );

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
      <div className="container mx-auto mt-4 px-4 flex space-x-6">
        {/* Main Content */}
        <ProgressBar percentage={50} />
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4">Treenance</h1>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col p-3 bg-green-500 h-36 rounded-lg relative">
              <p>Placeholder name</p>
              <p>+amount Water</p>
              <div className="absolute bottom-0 right-0">
                <Modal title="How do you save money?" content={modal11}/>
              </div>
            </div>
            <div className="flex flex-col bg-green-500 h-36 rounded-lg relative">
              <p>Placeholder name</p>
              <p>+amount Water</p>
              <div className="absolute bottom-0 right-0">
                <Modal />
              </div>
            </div>
            <div className="flex flex-col bg-green-500 h-36 rounded-lg relative">
              <p>Placeholder name</p>
              <p>+amount Water</p>
              <div className="absolute bottom-0 right-0">
                <Modal />
              </div>
            </div>
            <div className="flex flex-col bg-green-500 h-36 rounded-lg relative">
              <p>Placeholder name</p>
              <p>+amount Water</p>
              <div className="absolute bottom-0 right-0">
                <Modal />
              </div>
            </div>
            <div className="flex flex-col bg-green-500 h-36 rounded-lg relative">
              <p>Placeholder name</p>
              <p>+amount Water</p>
              <div className="absolute bottom-0 right-0">
                <Modal />
              </div>
            </div>
            <div className="flex flex-col bg-green-500 h-36 rounded-lg relative">
              <p>Placeholder name</p>
              <p>+amount Water</p>
              <div className="absolute bottom-0 right-0">
                <Modal />
              </div>
            </div>
            <div className="flex flex-col bg-green-500 h-36 rounded-lg relative">
              <p>Placeholder name</p>
              <p>+amount Water</p>
              <div className="absolute bottom-0 right-0">
                <Modal />
              </div>
            </div>
            <div className="flex flex-col bg-green-500 h-36 rounded-lg relative">
              <p>Placeholder name</p>
              <p>+amount Water</p>
              <div className="absolute bottom-0 right-0">
                <Modal />
              </div>
            </div>
            <div className="flex flex-col bg-green-500 h-36 rounded-lg relative">
              <p>Placeholder name</p>
              <p>+amount Water</p>
              <div className="absolute bottom-0 right-0">
                <Modal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

function handleAnswer11(answer) {
  // Assuming the correct answer is Paris, you can check the selected answer and return an integer accordingly
  if (answer === 1) {
    // Correct answer, return an integer
    console.log("Correct Answer!")
    return 10; // For example, return 10 as the integer for the correct answer
  } else {
    // Incorrect answer, handle it as needed
    console.log("Incorrect answer");
    // You might want to provide feedback to the user or perform other actions
  }
}