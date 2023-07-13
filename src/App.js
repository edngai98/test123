import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import { AuthContextProvider } from './sections/auth/context/AuthContext';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <HelmetProvider>
      <AuthContextProvider>
        <ThemeProvider>
          <ScrollToTop />
          <StyledChart />
          <Router />
        </ThemeProvider>
      </AuthContextProvider>
    </HelmetProvider>
  );
}
