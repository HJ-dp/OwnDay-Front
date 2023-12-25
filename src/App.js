import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import AppLayout from "./components/common/AppLayout";
import AuthPage from "./pages/AuthPage";

import SignUpPage from "./pages/SignUpPage";
import DetailPage from "./pages/DetailPage";
function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/detail:id" element={<DetailPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
