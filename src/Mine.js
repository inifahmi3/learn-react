import React from 'react';
import Nav from './Elements/Nav';
class Mine extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <header className="bg-light" style={styles.header}>
                    <h1 style={styles.bold}>TETEW</h1>
                </header>
            </div>
        );
    }
}

const styles = {
    header: {
        height: 500,
        fontFamily: 'Lato',
        textAlign: 'Center',
        paddingTop: 40,
        paddingBottom: 40
    },
    bold : {
        fontWeight: 700
    }
};

export default Mine