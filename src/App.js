import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import "./App.css";
import "./bootstrap-rtl.css";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <div className="App">
      <Menu />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
