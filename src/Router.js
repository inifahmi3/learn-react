import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Mine from './Mine';
import Article from './Pages/Articles/Article';
import DetailArticle from './Pages/Articles/DetailArticle';
import About from './Pages/About';
import Contact from './Pages/Contact';
// import Blank from './Pages/Blank';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Mine} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
        {/* <Route path='' component={Blank} /> */}
        <Route path='/Article/' component={Article} />
        <Route path='/Detail/:id' component={DetailArticle} />
    </Switch>
)

export default Router