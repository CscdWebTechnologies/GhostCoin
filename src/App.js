import './App.css';
import Numbers from "./components/Numbers";
import StartEarn from "./components/StartEarn";
import Started from "./components/Started";
import Phone from "./components/Phone";

function App() {
  return (
    <div className="App">
      
      <Phone/>
      <Numbers/>
      <Started/>
      <StartEarn/>
    </div>
  );
}

export default App;
