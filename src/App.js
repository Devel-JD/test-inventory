import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Container>
      {/* <Outlet /> */}
    </BrowserRouter>
  );
};

export default App;
