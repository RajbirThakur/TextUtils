import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './Components/About';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17 54 84)';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={toggleMode} />
        <Alert Alert={alert} />
        <Routes>
          <Route exact path="/" element={<Textform heading="Enter the text below to analyze" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;