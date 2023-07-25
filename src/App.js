import logo from "./logo.svg";
import "./App.css";
import PageRoute from "./PageRoute/PageRoute";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <PageRoute />
      <Footer />
    </div>
  );
}

export default App;
