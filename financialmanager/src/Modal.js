// Modal.js
function Modal({ content, onClose, selectedAnswer }) {

  console.log('selectedAnswer: ', selectedAnswer);
  
  return (
    <div 
      style={{
        color: 'black',
      }}
    className="fixed top-0 left-0 w-full h-full bg-gray-200 p-10 z-50">
      <div className="grid grid-cols-2 gap-2 h-full">
          <div className="bg-white p-4 rounded-lg overflow-auto">
              {/* Add your miscellaneous content here */}
              <div>
                <p>{content}</p>
                <button onClick={onClose}>
                  Close
                  </button>
              </div>
          </div>
        </div>
    </div>

    
  );
}

export default Modal;
