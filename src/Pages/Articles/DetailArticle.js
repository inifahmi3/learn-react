import React from "react";
import Time from 'react-time';
import { Link } from 'react-router-dom';
import ArticleAPI from '../../Api';
import Nav from '../../Elements/Nav';
import Footer from '../../Elements/Footer';

const DetailArticle = props => {
  const article = ArticleAPI.get(parseInt(props.match.params.number, 10));
  if (!article) {
    return <div>Sorry, but the article was not found</div>;
  }
  return (
    <div>
      <h1>
        {article.title} (#{article.id})
      </h1>
      <h2>Position: {article.date}</h2>
      <Link to="/roster">Back</Link>
    </div>
  );
};



// class DetailArticle extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Nav />
//                     <header>
//                         <h1>HOME</h1>
//                     </header>
//                     <div className="subHeader">
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-4 text-center">
//                                     <i className="text-white fab fa-react fa-5x"></i>
//                                     <h4 className="text-white font-weight-bold mt-3">ReactJS</h4>
//                                 </div>
//                                 <div className="col-4 text-center">
//                                     <i className="text-white fab fa-html5 fa-5x"></i>
//                                     <h4 className="text-white font-weight-bold mt-3">HTML5</h4>
//                                 </div>
//                                 <div className="col-4 text-center">
//                                     <i className="text-white fab fa-css3 fa-5x"></i>
//                                     <h4 className="text-white font-weight-bold mt-3">CSS3</h4>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="container pt-4 pb-4">
//                         <div className="row mainContent">
//                             {
//                                 ArticleAPI.all().map(p =>(
//                                     <div className="col-lg-3 col-md-4 col-sm-6" key={p.id}>
//                                         <div className="card">
//                                             <div className="date"><Time value={p.date} format="DD"/><br/><Time value={p.date} format="MMMM"/></div>
//                                             <Link className="title" to={`/Article/${p.id}`}>{p.title+' '+p.id}</Link>
//                                         </div>
//                                     </div>
//                                 ))
//                             }
//                         </div>
//                     </div>
//                 <Footer />
//             </div>
//         )
//     }
// }

export default DetailArticle