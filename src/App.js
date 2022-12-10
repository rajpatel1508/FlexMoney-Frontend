import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './containers/registerPage';
import Home from './containers/Home';
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
