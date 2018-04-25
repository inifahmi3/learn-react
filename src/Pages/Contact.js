import React from "react";
import Nav from '../Elements/Nav';
import Footer from '../Elements/Footer';

class About extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <header>
                    <h1>Contact</h1>
                </header>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mt-4 text-center">
                                <h1>0123456789</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default About