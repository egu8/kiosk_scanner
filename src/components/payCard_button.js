import React from "react";
import { Link } from "react-router-dom";

class PayCardButton extends React.Component {
    render() {
        return (
            <Link to="/pay1card">
                <button style={{}}>Credit or Debit</button>
            </Link>
        );
    }
}
export default PayCardButton;