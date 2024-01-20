import logo from './logo.svg';
import './App.css';
import Homepage from './home';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
