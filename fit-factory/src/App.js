import logo from "./logo.svg";
import "./App.css";
import { Heading } from "@chakra-ui/react";
import  Carousel  from "./Carousel/Carousel";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Heading>Hellofit-factory with team</Heading>
     <Home/>
     <Footer/>
    </div>
  );
}

export default App;
