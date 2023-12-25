import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import AppLayout from './components/common/AppLayout';
function App() {
  return (
    <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
    </BrowserRouter>
  );
}

export default App;
