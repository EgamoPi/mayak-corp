import { createElement as $ } from 'react';
import GlobalStyle from './components/GlobalStyle';
//Router
import { Switch, Route, useLocation } from 'react-router-dom';
//Pages and Navigation
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import OurProjects from './pages/OurProjects';
import ServiceDetail from './pages/ServiceDetail';
import ContactUs from './pages/ContactUs';
//Animation
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return $(
    'div',
    { className: 'App' },
    $(GlobalStyle),
    $(Nav),
    $(
      AnimatePresence,
      { exitBeforeEnter: true },
      $(
        Switch,
        { location: location, key: location.pathname },
        $(Route, { exact: true, path: '/' }, $(AboutUs)),
        $(Route, { exact: true, path: '/services' }, $(OurProjects)),
        $(Route, { path: '/services/:id' }, $(ServiceDetail)),
        $(Route, { path: '/contact' }, $(ContactUs))
      )
    )
  );
}

export default App;
