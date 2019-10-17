import React from 'react';
import Header from './components/header';
import Headline from './components/headline';
import './app.scss';
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
    <div className="app">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click here to display posts!"
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
