import React from "react";

class Nav extends React.Component {
    render () {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="{}">Mi</a>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="{}">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="{}">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="{}">Article</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="{}">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Nav