import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-300 h-screen">
        <div className="underline font-bold">Hello World</div>
      </div>
      <Footer />
    </>
  );
}

export default App;
