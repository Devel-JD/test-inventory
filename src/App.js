import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      {/* <Outlet /> */}
    </BrowserRouter>
  );
};

export default App;
