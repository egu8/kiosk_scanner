import React from "react";
import { Link } from "react-router-dom";

class HelpButton extends React.Component {
    render() {
        return (
            <Link to="/help">
                <button style={{
                    backgroundColor: 'gray',
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
                    Request Assistance
                </button>
            </Link>
        );
    }
}
export default HelpButton;