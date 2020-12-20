import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Pricing from './components/Pricing/Pricing';
import Products from './pages/Products/Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import LoginApp from './pages/SignUp/LoginApp';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Pricing' component={Pricing} />
        <Route path='/Products' component={Products} />
        <Route path='/SignUp' exact component={LoginApp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

