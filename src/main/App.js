import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.scss';
// components fexid
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
// components home
import Home from '../components/home/home';
// components service
import Service from '../components/services/service';
// components about
import About from '../components/about/about';
// components contact
import Contact from '../components/contact/contact';
// components notfound
import NotFound from '../components/notfound/notfound';
//////////////////////////////////////////////////
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/services/:id" component={Service} />
            <Route path="/about_us" component={About} />
            <Route path="/contact_us" component={Contact} />
            <Route path="/404" component={NotFound} />
            <Redirect from='*' to='/404' />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;