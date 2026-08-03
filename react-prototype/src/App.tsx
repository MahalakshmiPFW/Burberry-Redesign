import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { HomePage } from './pages/HomePage';
import { ComparisonPage } from './pages/ComparisonPage';
import { ProductPage } from './pages/ProductPage';

function App() {
  return (
    <div className="app">
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trench-coats" element={<ComparisonPage />} />
          <Route path="/trench-coats/:slug" element={<ProductPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
