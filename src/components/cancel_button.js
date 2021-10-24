import React from "react";
import { Link } from "react-router-dom";

class CancelButton extends React.Component {
    render() {
        return (
            <Link to="/">
                <button style={{
                    backgroundColor: 'red',
                    color: 'white',
                    fontSize: '20px',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    paddingRight: '60px',
                    paddingLeft: '60px',
                    borderRadius: '5px',
                    marginTop: '10px',
                    marginBottom: '10px',
                    cursor: "pointer",
                    fontFamily: "sans-serif",
                    width: '300px',
                    }}>
                    Cancel Checkout
                </button>
            </Link>
        );
    }
}
export default CancelButton;