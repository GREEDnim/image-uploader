import { useState,useRef } from "react"
import InputCard from "./Components/InputCard/InputCard"
import Loading from "./Components/Loader/Loading"
import OutputCard from "./Components/OutputCard/OutputCard"
import Footer from "./Components/Footer/Footer"
import './App.css'
import {DisplayContext} from "./Contexts/DisplayContext"

function App() {

  const[whatToDisplay,changeWhatToDisplay]=useState(0);

  const [url,setUrl]=useState('');
  let localUrl=useRef({});

  function getComponentToLoad(){
      if(whatToDisplay==1) return <Loading></Loading>;
      if(whatToDisplay==2) return <OutputCard></OutputCard>;
      else return <InputCard  ></InputCard>
  }

  return (

    <div className="App">
      <div className="cards">
          <DisplayContext.Provider value={{changeWhatToDisplay,url,setUrl,localUrl}}>
            {getComponentToLoad()}  
          </DisplayContext.Provider>
      </div>
      <Footer></Footer>   
    </div>
  )
}

export default App
