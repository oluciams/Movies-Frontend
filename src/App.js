import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AppRouter } from "./router/AppRouter";


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
