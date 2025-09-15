import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

type Page = 'landing' | 'products' | 'cart';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'products':
        return <ProductsPage />;
      case 'cart':
        return <CartPage onNavigate={handleNavigate} />;
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        {renderPage()}
      </div>
    </Provider>
  );
}

export default App;