import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";

import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-full relative">
      <Header />
      <div className="w-full pt-24">
        <Routes>
          <Route path="/" element={<Home />} />  
        </Routes>  
      </div>
      <Cart />
      <SearchResult />
    </div>
  );
}

export default App;
