// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform'
 
function App() {
  return (
    <>
    <Navbar title="Asif raza" home="Vinayak Nagar"/>
    <div className='container'>
    <Textform heading="enter your heading here"/>
   
    </div>
    </>
  )
}

export default App;
 