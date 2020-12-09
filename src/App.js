import React, { useEffect, useState } from 'react';
import Header from '../src/Components/Header';
import Body from '../src/Components/Body';
import Footer from '../src/Components/Footer';

function App() {
  const [force, setforce] = useState(0);

  useEffect(() => {
    //re-rendering the component on window-resize event
    window.addEventListener('resize', force_render)

    return () => { window.removeEventListener('resize', force_render) }
  })

  const force_render = () => {
    setforce(force => force + 1);
  }

  return (
    <div>

      <Header />
      <Body />
      <Footer />

    </div >
  );
}

export default App;
