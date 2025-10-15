
// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import { ShopContextProvider } from "./context/shop-context";

const App = () => {
  return (
<ShopContextProvider>
      <div className="min-h-screen flex flex-col bg-neutral-50  text-neutral-900 antialiased">
      <header className="w-full bg-white/60 backdrop-blur-sm border-b border-neutral-200">
        <div className="flex items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
      </header>

      <main className="flex-1 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="w-full bg-white border border-neutral-100 rounded-2xl shadow-sm p-4 md:p-6 transition-colors">
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </main>
<Footer />
    </div>
</ShopContextProvider>
  );
};

export default App;
