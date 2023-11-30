import React from 'react';
import { Header } from './components/header'
import { BrowserRouter as Router } from 'react-router-dom';
import { Pages } from './components/pages'
import { DataProvider } from './context/Dataprovider'
import { Cart } from './components/cart';


function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header></Header>
          <Cart></Cart>
          <Pages></Pages>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
