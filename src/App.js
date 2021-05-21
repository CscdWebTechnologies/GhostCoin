import './App.css';
import Numbers from "./components/Numbers";
import StartEarn from "./components/StartEarn";
import Started from "./components/Started";
import Footer from "../src/components/Footer";

function App() {
  return (
    <div className="App">
      
      <Numbers/>
      <Started/>
      <StartEarn/>
      <Footer/>
    </div>
  );
}

export default App;
