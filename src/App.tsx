import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import Home from "@/pages/Home/Home";
import Menu from "@/pages/Menu/Menu";
import ProductDetail from "@/pages/ProductDetail/ProductDetail";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:categoria" element={<Menu />} />
            <Route
              path="/menu/:categoria/:producto"
              element={<ProductDetail />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </ThemeProvider>
  );
};

export default App;
