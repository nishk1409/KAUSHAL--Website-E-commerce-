
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home"
import Search from "./Pages/search"
import Cart from "./Pages/cart"

const App = () => {
  return (
  <Router>
    {/* Header */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </Router>
  )
}

export default App;