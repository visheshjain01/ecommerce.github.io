import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {Routes,Route} from 'react-router-dom';
import Wishlist from "./pages/Wishlist";
import Women from "./pages/Women"
import {auth} from "./firebase";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import {matrix,Wishlistt,qty,setCount,setCountOne,setWish } from "./pages/Product";
import { setCartVal } from "./components/Navbar";


function App() {

  const [userName, setUserName] = useState("");
  const [value, setValue] = useState(false);

  function handleLogout()
  {

    for(let i=0;i<25;i++)
    {
      for(let j=0;j<7;j++)
      {
        matrix[i][j]=0;
        Wishlistt[i][j]=0;
      }
    }

    setCartVal(0);
    setWish(0);
    setCount(0);
    setCountOne(0);

    var x=qty.length;
    for(let i=0;i<x;i++)
    {
      qty.pop();
    }

    setValue(false);
    setUserName("");
    signOut();
  }

  useEffect(() => {
      auth.onAuthStateChanged((user) => {
      setValue(false);
      setUserName("");
      if(user) 
      {
        setUserName(user.displayName);
        setValue(true);
      } 
      
      else 
      {
        setUserName("");
        setValue(false);
      }

    });
  }, []);

  return (
    <div className="App">
    
      <div className="routes">
          <Routes> {/* it allows us to have different routes*/}

            <Route exact path="/" element={<Home name={userName} account={value} func={handleLogout} />}></Route>
            <Route exact path="/products" element={<ProductList name={userName} account={value} func={handleLogout}/>}></Route>
            <Route exact path="/cart" element={<Cart name={userName} account={value} func={handleLogout}/>}></Route>
            <Route exact path="/products/:proId" element={<Product name={userName} account={value} func={handleLogout}/>}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/wishlisttt" element={<Wishlist name={userName} account={value} func={handleLogout} />}></Route>
            <Route exact path="/women" element={<Women name={userName} account={value} func={handleLogout} />}></Route>    
          </Routes>
      </div>
    </div>
  );
}

export default App;