import React from 'react';
import Time from 'react-time';
import { Link } from 'react-router-dom';
// import ArticleAPI from './Api';
class Mine extends React.Component {

    constructor() {
        super()
        this.state = {datas : [], img : []}
    }
    
    componentDidMount() {
        var url = "https://randomuser.me/api/?results=20&gender=male"
        // console.log(url)
        return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            let people = responseJson.results;
            let images = people.pictures;
            this.setState( {datas : people, img: images} );
            console.log(this.state.images)
        })
        .catch((error) => {
        console.error(error);
        });

    }

    render() {

        let dataSources = this.state.datas.map(function(data){
            return (
                <div className="col-lg-3 col-md-4 col-sm-6" key={data.login.salt}>
                    <div className="card" style={{backgroundImage: `url(${data.picture.large})`}}>
                        <div className="date"><Time value={data.dob} format="DD"/><br/><Time value={data.dob} format="MMM"/></div>
                        <Link className="title" to="">{data.name.first} {data.name.last}</Link>
                    </div>
                </div>
            )
        }) 

        return (
            <div>
                <header>
                    <h1>HOME</h1>
                </header>
                <div className="subHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 text-center">
                                <i className="text-white fab fa-react fa-5x"></i>
                                <h4 className="text-white font-weight-bold mt-3">ReactJS</h4>
                            </div>
                            <div className="col-4 text-center">
                                <i className="text-white fab fa-html5 fa-5x"></i>
                                <h4 className="text-white font-weight-bold mt-3">HTML5</h4>
                            </div>
                            <div className="col-4 text-center">
                                <i className="text-white fab fa-css3 fa-5x"></i>
                                <h4 className="text-white font-weight-bold mt-3">CSS3</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-4 pb-4">
                    <div className="row mainContent">
                        {dataSources}
                    </div>
                </div>
            </div>
        );
    }
}

export default Mine