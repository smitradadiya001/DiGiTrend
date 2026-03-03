
import Home from './Pages/Home'
import Header from './Component/Header'
import { Routes, Route } from "react-router-dom";
import Third from './Component/Third';
import FeatureCards from './Component/Feature';
import FloatingWhatsApp from './Component/FloatingWhatsApp';


function App() {
 

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        
      </Routes>
      <FloatingWhatsApp />
      
        
      
      
     
      
    </>
  )
}

export default App
