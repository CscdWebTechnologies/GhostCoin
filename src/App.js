import './index.css';
import './App.css';
import Constel from "./components/Constel";
import Navbar from "./components/navbar";
import Numbers from "./components/Numbers";
import StartEarn from "./components/StartEarn";
import Started from "./components/Started";

import Phone from "./components/Phone";
import Table from "./components/Table";
=======
import Footer from "../src/components/Footer";

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Phone/>
      <Table/>
      <Constel/>
      <Numbers/>
      <Started/>
      <StartEarn/>
      <Footer/>
    </div>
  );
}

export default App;
