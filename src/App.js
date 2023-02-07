import Index from "./Pages/LandingPage/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/apply" element={ <Cart />} />
        </Routes>
      </Router>
  );
}

export default App;
