import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    // jsx, can't use class, but className instead
    // use {} to store variablea
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
