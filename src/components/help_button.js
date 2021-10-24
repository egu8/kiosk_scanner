import React from "react";
import { Link } from "react-router-dom";

class HelpButton extends React.Component {
    render() {
        return (
            //<h1>ImagineThisIsA-REQUEST_ASSISTANCE-typeButtonLmao</h1>

            <Link to="/help">
                <button>Request Assistance</button>
            </Link>
        );
    }
}
export default HelpButton;