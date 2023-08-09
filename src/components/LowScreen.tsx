import { useState, useEffect } from 'react';
import '../css/LowScreen.css';

function App() {
  const [showDocs, setShowDocs] = useState(true);
  const [largeScreen, setLargeScreen] = useState(true);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 990) {
        setLargeScreen(true);
      }
      
      if (window.innerWidth <= 478) {
        setShowDocs(false);
      } else {
        setShowDocs(true);
      }

      if (window.innerWidth <= 990) {
        setLargeScreen(false);
      }
    };

    handleResize(); // Call the function once to set the initial state

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="header">
      <div id="top-header">
        <div id="logo">
          <img src="/vect.svg" alt="" /> <span>Gmate</span>
        </div>
        {!largeScreen && (
          <div id='bar'>
          {showDocs && <div id="docs" style={{color:'orange'}} >Docs <span>→</span></div>}
            <div id="menu" onClick={()=>{
              setTransition(!transition);
          }}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}

        {largeScreen && (
          <div id='lbar'>
            <li style={{color:'white'}}>Home</li>
            <li>Contact</li>  
            {showDocs && <li id="docs" style={{color:'orange'}} >Docs <span>→</span></li>}
          </div>
        )}
      </div>

      {(!largeScreen) && (
        <div id="down-header"  className={transition ? 'transitioned':''}>
          <h3>Home</h3>
          <h3>Contact</h3>
        </div>
      )}

    </div>
  );
}

export default App;
