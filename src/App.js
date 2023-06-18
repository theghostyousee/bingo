import './index.css';
import React, { useState, useEffect } from 'react';


function App() {

  const [title, setTitle] = useState('Privacy');

  useEffect(() => {
    const words = ['404ERROR', '0xBingo', 'BingAIo', 'Bing@!X', 'BinLAXSg', 'Bingo'];
    let currentIndex = 0;

    const updateTitle = () => {
      setTitle(words[currentIndex]);
      currentIndex = (currentIndex + 1) % words.length;

      const duration = currentIndex === 0 ? 2000 : 400; // Adjust durations as needed

      setTimeout(updateTitle, duration);
    };

    updateTitle();

    return () => clearTimeout(updateTitle);
  }, []);

  const handleButtonClick = () => {
    window.location.href = 'https://twitter.com/intent/tweet?text=I%27m%20requesting%20Beta%20Access%20for%20%400xBingoProtocol';
  };


  return (
    <div className="landing">

      <div className='title'>
        <h1>{title}</h1>
        <h1>Matters</h1>
      </div>

      <div className='paragraph'>
        <p>0xBingo: AI prediction powerhouse for ERC20 tokens.</p>

        <button  onClick={handleButtonClick}>Proof of Bingo</button>
      </div>
      
    </div>
  );
}

export default App;
