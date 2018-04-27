import React , {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mine from './Mine';
import Article from './Pages/Articles/Article';
import DetailArticle from './Pages/Articles/DetailArticle';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Nav from './Elements/Nav';
import Footer from './Elements/Footer';
// import Blank from './Pages/Blank';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
            <Switch>
              <Route exact path='/' component={Mine} />
              <Route path='/About' component={About} />
              <Route path='/Contact' component={Contact} />
              {/* <Route path='' component={Blank} /> */}
              <Route path='/Article/' component={Article} />
              <Route path='/Detail/:id' component={DetailArticle} />
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
