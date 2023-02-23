import Carousel from "./Carousel/Carousel";
import Navbar from "./Components/Navber";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import AllRoutes from "./Pages/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
    <AllRoutes/>
      <Footer />
    </div>
  );
}

export default App;
