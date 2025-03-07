import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import PDFReader from './PDFReader';

function App() {
  return (
  
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/PDFReader" element={<PDFReader />} />
        
    </Routes>
    </Router>
  );
}
     
  


export default App;
