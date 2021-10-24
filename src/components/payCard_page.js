import React from "react";

class PayCard extends React.Component {
    render () {
        return (
            <div className="card pay page">
                <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                    <h1>Please follow instructions on pinpad to complete transaction</h1>
                </div>
            </div>
        );
    }
}
export default PayCard;
