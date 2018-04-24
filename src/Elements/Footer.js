import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div style={styles.footer}>
                &copy; 2018 MF
            </div>
        );
    }
}

const styles = {
    footer : {
        textAlign: 'center',
        height: 50,
        paddingTop: 18
    }
}

export default Footer