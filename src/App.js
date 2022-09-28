import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AppRouter } from "./router/AppRouter";
import "./css/app.css";

function App() {

  return (
  <>
    <Header/>
    <div className="container mt-3">
      <AppRouter />    
    </div>
    <Footer/>  
  </>  
  );
}

export default App;
