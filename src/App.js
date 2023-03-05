// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
// import cssFolder from "../src/CommonResource/css"; by me

import Header from "./CommonResource/Header/Header";

import Footer from "./CommonResource/Footer/Footer";
import Alert from "./CommonResource/AlertSection/alert";
import IpadPro from "./CommonResource/ipadPro/IpadPro";
import MacBook from "./CommonResource/MacBookPro/MacBook";
import IphonePro from "./CommonResource/IphonePro/IphonePro";
import IphoneCDC from "./CommonResource/IphoneCDC/IphoneCDC";
import WatchTv from "./CommonResource/WatchTv/WatchTv";
import Arcade from "./CommonResource/Arcade/Arcade";

function App() {
  return (
    <div>
      <Header />
      <Alert />
      <IpadPro />
      <MacBook />
      <IphonePro />
      <IphoneCDC />
      <WatchTv />
      <Arcade />
      <Footer />
    </div>
  );
}

export default App;
