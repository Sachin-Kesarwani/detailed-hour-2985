import Navbar from "./Components/Navber";
import Footer from "./Components/Footer";
import AllRoutes from "./Pages/AllRoutes";

function App() {
  let url = document.URL;
  let param = url.includes("admin");
  return (
    <div className="App">
      {!param && <Navbar />}
      <AllRoutes />
      {!param && <Footer />}
    </div>
  );
}

export default App;
