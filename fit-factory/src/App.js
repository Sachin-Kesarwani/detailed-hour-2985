import Navbar from "./Components/Navber";
import MainRoutes from "./Components/MainRoutes";
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
