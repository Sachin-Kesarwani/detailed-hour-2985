import Navbar from "./Components/Navber";
import Footer from "./Components/Footer";
import AllRoutes from "./Pages/AllRoutes";
import { useParams } from "react-router-dom";

function App() {
  let param = useParams();
  console.log(param);
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
