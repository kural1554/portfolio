import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AppRoutes from "./router/allrouter"; // ✅ Import Correct Router File

const App = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <AppRoutes /> {/* ✅ This will now work correctly */}
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
