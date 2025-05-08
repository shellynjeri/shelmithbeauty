import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Pagenotfound from './Components/Pagenotfound';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Addproduct from './Components/Addproducts';
import Getproducts from './Components/Getproduct';
import Navcomponent from './Components/Navcomponent';
import Makepayment from './Components/Makepayment';
import Footer from './Components/Footer';
import Aboutus from './Components/Aboutus';
import ChatBot from './Components/chatbot';
import OrderForm from './Components/checkbox';




function App() {
  return (
    <Router>
    <div className="App">
      <header >
       
      <Navcomponent/>
      </header>
      
    </div>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/addproduct' element={<Addproduct/>}/>
      <Route path='/makepayment' element={<Makepayment/>}/>
      <Route path='/' element={<Getproducts/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>




      <Route path='*'element={<Pagenotfound/>}/>
    </Routes>
      <div>
        
        <Footer></Footer>
      </div>
    </Router>
      
      
    
  );
}

export default App;
