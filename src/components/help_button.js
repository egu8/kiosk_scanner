import React from "react";
import { Link } from "react-router-dom";

class HelpButton extends React.Component {
    render() {
        return (
            <Link to="/help">
                <button>Request Assistance</button>
            </Link>
        );
    }
}
export default HelpButton;