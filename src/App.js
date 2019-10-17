import React from 'react';
import Header from './components/header';
const tempArr = [
  {
    fName: 'Jake',
    lName: 'Lewochko',
    email: 'jlewochko@gmail.com',
    age: 4,
    onlineStatus: false
  }
];
function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
