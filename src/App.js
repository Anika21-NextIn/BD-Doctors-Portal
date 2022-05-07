import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Home />} />
       </Routes>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
