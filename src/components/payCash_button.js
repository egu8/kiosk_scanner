import React from "react";
import { Link } from "react-router-dom";

class PayCashButton extends React.Component {
    render() {
        return (
            <Link to="/pay2cash">
                <button>Cash</button>
            </Link>
        );
    }
}
export default PayCashButton;