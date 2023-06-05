
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginPage from './pages/Login';



function App() {
  return (
    <div className="App">
     <Router>
     <Routes>
      <Route path='/' element={<NavBar/>} />
      <Route path='/login' element={<LoginPage />} />
     </Routes>
     </Router>
     </div>
  );
}

export default App;
