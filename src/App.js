import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AppRouter } from "./router/AppRouter";

//const API_KEY= b61364da3cf775b0c719a30ee4fe39b2


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
