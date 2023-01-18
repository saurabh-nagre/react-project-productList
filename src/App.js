import LoginForm from "./Components/loginForm";
import './App.css'
import SearchSystem from "./Components/searchSystem";
import ProductTable from "./Components/productTable";
import { useState } from "react";

function App() {

  const [showinStock,setShowinStock] = useState(false)
  const [searchText,setSearchText] = useState("")

  return (
    <>
      <div className="App">
        <LoginForm />
      </div>
      <div className="App">
        <SearchSystem checkbox={setShowinStock} setSearchText = {setSearchText}/>
        <ProductTable showInStock={showinStock} compareText={searchText}/>
      </div>
    </>
  );
}

export default App;


// create app using babel and react CDN