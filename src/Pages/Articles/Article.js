import React from "react";
import Time from 'react-time';
import { Link } from 'react-router-dom';
import ArticleAPI from '../../Api';

class Article extends React.Component {
    render() {
        return (
            <div>
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
                                            <Link className="title" to={`/Detail/${p.id}`}>{p.title+' '+p.id}</Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Article