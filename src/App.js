
import './App.css';
import Navbar from './Components/Navbar';
import TestUtilFom from './Components/TestUtilFom';

function App() {
  return (
    <div className="App">
      {/* <Navbar title="Textutils" aboutText="About Us"/> */}
      {/* <Navbar /> */}
      <Navbar title="Textutils" />
      <div className='container my-3'>
        <TestUtilFom  heading="Enter the text to analyse below"/>
      </div>
    </div>
  );
}

export default App;
