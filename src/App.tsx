import React from 'react';
import Body from './Component/Body/Body';
// import FirstPart from './Component/Body/FirstPart';
import Slider from './Component/Body/Slider';
import Footer from './Component/footer';
import Header from './Component/header';
const App=()=> {
  return (
    <div className="App">
      <Header />
      <Slider />
     <Body />
     <Footer /> 
    
    </div>
  );
}

export default App;
