import React from "react";
import Time from 'react-time';
import { Link } from 'react-router-dom';
import ArticleAPI from '../../Api';
import Nav from '../../Elements/Nav';
import Footer from '../../Elements/Footer';

class Article extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                    <header>
                        <h1>Articles</h1>
                    </header>
                    <section>
                        <div className="container pt-4 pb-4">
                            <div className="row mainContent">
                                {
                                    ArticleAPI.all().map(p =>(
                                        <div className="col-lg-3 col-md-4 col-sm-6" key={p.id}>
                                            <div className="card">
                                                <div className="date"><Time value={p.date} format="DD"/><br/><Time value={p.date} format="MMMM"/></div>
                                                <Link className="title" to={`/Article/${p.id}`}>{p.title+' '+p.id}</Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                <Footer />
            </div>
        )
    }
}

export default Article