import React from 'react';
import Nav from './Elements/Nav';
import Footer from './Elements/Footer';
class Mine extends React.Component {

    componentDidMount() {
        // var url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d42fdc08586b46088ce1ce85979d08de"
        // console.log(url)
    }

    render() {
        return (
            <div>
                <Nav />
                <header style={styles.header}>
                    <h1 style={styles.textHeader}>HEADER</h1>
                </header>
                <div style={styles.subHeader}>
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
                    <div className="row" style={styles.mainContent}>
                        <div className="col-lg-6 col-md-4 col-sm-6">
                            <div style={styles.mainContent.card}>
                                <div style={styles.mainContent.card.date}>28 MAY</div>
                                <div style={styles.mainContent.card.title}>Title Content</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div style={styles.mainContent.card}>
                                <div style={styles.mainContent.card.date}>28 MAY</div>
                                <div style={styles.mainContent.card.title}>Title Content</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div style={styles.mainContent.card}>
                                <div style={styles.mainContent.card.date}>28 MAY</div>
                                <div style={styles.mainContent.card.title}>Title Content</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div style={styles.mainContent.card}>
                                <div style={styles.mainContent.card.date}>28 MAY</div>
                                <div style={styles.mainContent.card.title}>Title Content</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div style={styles.mainContent.card}>
                                <div style={styles.mainContent.card.date}>28 MAY</div>
                                <div style={styles.mainContent.card.title}>Title Content</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div style={styles.mainContent.card}>
                                <div style={styles.mainContent.card.date}>28 MAY</div>
                                <div style={styles.mainContent.card.title}>Title Content</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div style={styles.mainContent.card}>
                                <div style={styles.mainContent.card.date}>28 MAY</div>
                                <div style={styles.mainContent.card.title}>Title Content</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

const styles = {
    header : {
        height: 500,
        fontFamily: 'Lato',
        textAlign: 'Center',
        backgroundColor: '#4b7bec',
        paddingTop: 40,
        paddingBottom: 40,
        marginTop: 56
    },
    textHeader : {
        fontWeight: 700,
        lineHeight: 10,
        color: 'white'
    },
    subHeader : {
        paddingTop: 30,
        backgroundColor: '#45aaf2',
        minHeight: 180
    },
    mainContent : {
        card : {
            position: 'relative',
            height: 250,
            backgroundColor: '#20bf6b',
            borderRadius: 8,
            paddingTop: 10,
            paddingLeft: 10,
            marginBottom: 30,
            date : {
                display: 'inline-block',
                fontSize: 26,
                color: 'white',
                fontFamily: 'Lato',
                width: 80,
                lineHeight: 1.2
            },
            title : {
                position: 'absolute',
                bottom: 5,
                right: 10,
                fontFamily: 'Lato',
                fontWeight: 'bold',
                color: '#fff'
            }
        }
    }
};

export default Mine