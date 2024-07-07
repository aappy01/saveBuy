//Import DevDependences
import React, {useState} from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';

//Import Components
import Header from './components/Header'
import Footer from './components/Footer';

// Import Modules
import Register from './modules/Register';
import Login from './modules/Login';
import Home from './modules/Home'
import ProductPage from './modules/ProductPage';
import CartPage from './modules/CartPage';

function App() {
  const[currentForm, setCurrentForm] = useState("login")

  const toggleForm = (formName) =>{
    setCurrentForm(formName)
  }
  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={
            currentForm === 'login' ? (
              <Login onFormSwitch={toggleForm} />
            ) : (
              <Register onFormSwitch={toggleForm} />
            )
          }
        />
      </Routes>
      
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<ProductPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;


